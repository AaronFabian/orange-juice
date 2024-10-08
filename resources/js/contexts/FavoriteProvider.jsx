import { usePage } from "@inertiajs/react";
import { createContext, useContext, useEffect, useReducer } from "react";

import {
    URL_ANIME_STREAMING_LINK,
    generateHistory,
    getHistory,
    handlePlayerReady as videoJSPlayer,
    overWriteHistory,
} from "@/utils";

const FAVORITE = {
    SET_ERROR: "set-error",
    SET_FAVORITE_LIST: "set-favorite-list",
    SET_EPISODE_LIST: "set-episode-list",
    SET_STREAM_URL: "set-stream-url",
    SET_QUALITY: "set-quality",
    SET_IS_CHANGING_EPISODE: "set-is-changing-episode",
    START_WATCHING: "start-watching",
    LOAD_FAVORITE_LIST: "load-favorite-list",
};

const initialState = {
    animeId: null,
    currentEpsNumber: null,
    currentQuality: null,
    nowWatching: null, // example = -episodes-1
    isError: false,
    isLoading: false, // run when user click favorite item
    isChangingEpisode: false, // run when user change episode
    qualitySrc: [],
    episodeList: [], // assigned from animeDetails.episodes
    favoriteList: [], // assigned from useEffect()
    animeDetails: {},
};

const reducer = function (state, action) {
    switch (action.type) {
        case "set-is-changing-episode":
            return {
                ...state,
                isChangingEpisode: true,
            };

        case "set-quality":
            return {
                ...state,
                currentQuality: action.payload.quality,
                nowWatching: action.payload.nowWatching,
            };

        case "set-stream-url":
            return {
                ...state,
                qualitySrc: action.payload.sources,
                nowWatching: action.payload.nowWatching,
                currentEpsNumber: action.payload.currentEpsNumber,
                currentQuality: action.payload.currentQuality,
                isLoading: false,
                isChangingEpisode: false,
            };

        case "start-watching":
            return { ...state, isLoading: true, animeId: action.payload };

        case "set-episode-list":
            return {
                ...state,
                episodeList: action.payload.episodes,
                animeDetails: action.payload, // save for later
            };

        case "set-favorite-list":
            return {
                ...state,
                favoriteList: state.favoriteList.filter(
                    (s) => s.anime_id !== action.payload
                ),
            };

        case "load-favorite-list":
            return { ...state, favoriteList: action.payload };

        case "set-error":
            return { ...state, isError: true };

        default:
            console.warn(action.type);
            throw new Error("Unexpected type !");
    }
};

const FavoriteContext = createContext();

function FavoriteProvider({ children }) {
    const { props } = usePage();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(function () {
        dispatch({
            type: FAVORITE.LOAD_FAVORITE_LIST,
            payload: props.favoriteAnimes,
        });
    }, []);

    async function handleSetStreaming() {
        const history = getHistory();

        try {
            const currentAnime = history?.animes[state.animeId];

            // in case user delete all history
            if (!history)
                generateHistory(
                    state.animeDetails.id,
                    state.animeDetails.title,
                    state.animeDetails.image
                );

            let response = "";
            if (currentAnime === undefined || !currentAnime?.url) {
                // get eps 1
                const epsId = state.episodeList[0].id;
                response = await axios.get(
                    `${URL_ANIME_STREAMING_LINK}/watch/${epsId}`
                );
            } else {
                // get continue eps
                const epsId = currentAnime.url;
                response = await axios.get(
                    `${URL_ANIME_STREAMING_LINK}/watch/${epsId}`
                );
            }

            // initial auto set quality
            const sources = response.data.sources;
            autoPlaySource(sources, currentAnime?.lastEps ?? 1, dispatch);
        } catch (error) {
            // console.error(error);
            dispatch({ type: FAVORITE.SET_ERROR });
        }
    }

    async function handleChangingEpisode(epsId, lastEps) {
        dispatch({ type: FAVORITE.SET_IS_CHANGING_EPISODE });

        try {
            const { data } = await axios.get(
                `${URL_ANIME_STREAMING_LINK}/watch/${epsId}`
            );

            autoPlaySource(data.sources, lastEps, dispatch);

            overWriteHistory(state.animeId, lastEps, epsId);
        } catch (error) {
            console.error(error);
            dispatch({ type: FAVORITE.SET_ERROR });
        }
    }

    return (
        <FavoriteContext.Provider
            value={{
                ...state,

                // fn
                dispatch,
                handlePlayerReady: videoJSPlayer, // @utils
                handleSetStreaming,
                handleChangingEpisode,
            }}
        >
            {children}
        </FavoriteContext.Provider>
    );
}

function useFavorite() {
    const context = useContext(FavoriteContext);
    if (context === undefined)
        throw new Error("useFavorite used outside of FavoriteProvider !");

    return context;
}

function autoPlaySource(sources, numberOfEpisode, dispatch) {
    if (sources?.[2])
        // 720p
        dispatch({
            type: FAVORITE.SET_STREAM_URL,
            payload: {
                sources,
                nowWatching: sources[2].url,
                currentEpsNumber: numberOfEpisode,
                currentQuality: sources[2].quality,
            },
        });
    else if (sources?.[1])
        // 480p
        dispatch({
            type: FAVORITE.SET_STREAM_URL,
            payload: {
                sources,
                nowWatching: sources[1].url,
                currentEpsNumber: numberOfEpisode,
                currentQuality: sources[1].quality,
            },
        });
    else if (sources?.[0])
        // 360p
        dispatch({
            type: FAVORITE.SET_STREAM_URL,
            payload: {
                sources,
                nowWatching: sources[0].url,
                currentEpsNumber: numberOfEpisode,
                currentQuality: sources[0].quality,
            },
        });
    else throw new Error("Unexpected behaviour.");
}

export { useFavorite, FavoriteProvider, FAVORITE };

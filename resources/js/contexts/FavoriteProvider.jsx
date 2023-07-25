import { usePage } from "@inertiajs/react";
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

import {
    URL_ANIME_STREAMING_LINK,
    generateHistory,
    getHistory,
    orangeJuice,
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
    isLoading: false, // run in first open
    isChangingEpisode: false, // run when user change episode
    qualitySrc: [],
    episodeList: [],
    favoriteList: [],
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
    const [
        {
            nowWatching,
            favoriteList,
            episodeList,
            currentEpsNumber,
            currentQuality,
            qualitySrc,
            animeId,
            isLoading,
            isError,
            isChangingEpisode,
            animeDetails,
        },
        dispatch,
    ] = useReducer(reducer, initialState);

    useEffect(function () {
        dispatch({
            type: FAVORITE.LOAD_FAVORITE_LIST,
            payload: props.favoriteAnimes,
        });
    }, []);

    async function handleSetStreaming() {
        const history = getHistory();

        try {
            const currentAnime = history?.animes[animeId];

            // in case user delete all history
            if (!history)
                generateHistory(
                    animeDetails.id,
                    animeDetails.title,
                    animeDetails.image
                );

            let response = "";
            if (currentAnime === null || !currentAnime?.url) {
                // get eps 1
                const epsId = episodeList[0].id;
                response = await axios.get(
                    `${URL_ANIME_STREAMING_LINK}/${epsId}`
                );
            } else {
                // get continue eps
                const epsId = currentAnime.url;
                response = await axios.get(
                    `${URL_ANIME_STREAMING_LINK}/${epsId}`
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
                `${URL_ANIME_STREAMING_LINK}/${epsId}`
            );

            autoPlaySource(data.sources, lastEps, dispatch);

            overWriteHistory(animeId, lastEps, epsId);
        } catch (error) {
            console.error(error);
            dispatch({ type: FAVORITE.SET_ERROR });
        }
    }

    function handlePlayerReady(player) {
        player.on("waiting", () => {
            console.log("video is ready to play");
        });

        player.on("dispose", () => {
            console.log("player stop at: " + player.currentTime());
        });

        player.on("ended", () => {
            console.log("Player finished");
        });
    }

    return (
        <FavoriteContext.Provider
            value={{
                animeId,
                nowWatching,
                currentEpsNumber,
                currentQuality,
                qualitySrc,
                isLoading,
                isError,
                isChangingEpisode,
                episodeList,
                favoriteList,
                animeDetails,

                // fn
                dispatch,
                handlePlayerReady,
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

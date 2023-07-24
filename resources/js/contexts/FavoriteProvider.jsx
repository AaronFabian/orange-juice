import { usePage } from "@inertiajs/react";
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

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
        case "setIsChangingEpisode":
            return {
                ...state,
                isChangingEpisode: true,
            };

        case "setQuality":
            return {
                ...state,
                currentQuality: action.payload.quality,
                nowWatching: action.payload.nowWatching,
            };

        case "setStreamUrl":
            return {
                ...state,
                qualitySrc: action.payload.sources,
                nowWatching: action.payload.nowWatching,
                currentEpsNumber: action.payload.currentEpsNumber,
                currentQuality: action.payload.currentQuality,
                isLoading: false,
                isChangingEpisode: false,
            };

        case "startWatching":
            return { ...state, isLoading: true, animeId: action.payload };

        case "setEpisodeList":
            return {
                ...state,
                episodeList: action.payload.episodes,
                animeDetails: action.payload, // save for later
            };

        case "setFavoriteList":
            return {
                ...state,
                favoriteList: state.favoriteList.filter(
                    (s) => s.anime_id !== action.payload
                ),
            };

        case "loadFavoriteList":
            return { ...state, favoriteList: action.payload };

        case "setError":
            return { ...state, isError: true };

        default:
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
        dispatch({ type: "loadFavoriteList", payload: props.favoriteAnimes });
    }, []);

    async function handleSetStreaming() {
        const history = JSON.parse(localStorage.getItem("orange-juice"));

        const currentAnime = history.animes[animeId];

        try {
            let response = "";
            if (currentAnime === null || !currentAnime.url) {
                // get eps 1
                const epsId = episodeList[0].id;
                response = await axios.get(
                    `https://api.consumet.org/anime/gogoanime/watch/${epsId}`
                );
            } else {
                // get continue eps
                const epsId = currentAnime.url;
                response = await axios.get(
                    `https://api.consumet.org/anime/gogoanime/watch/${epsId}`
                );
            }

            // initial auto set quality
            const sources = response.data.sources;
            autoPlaySource(sources, currentAnime?.lastEps ?? 1, dispatch);
        } catch (error) {
            dispatch({ type: "setError" });
        }
    }

    async function handleChangingEpisode(epsId, lastEps) {
        dispatch({ type: "setIsChangingEpisode" });

        try {
            const { data } = await axios.get(
                `https://api.consumet.org/anime/gogoanime/watch/${epsId}`
            );

            autoPlaySource(data.sources, lastEps, dispatch);

            const history = JSON.parse(localStorage.getItem("orange-juice"));
            localStorage.setItem(
                "orange-juice",
                JSON.stringify({
                    ...history,
                    animes: {
                        ...history.animes,
                        [animeId]: {
                            ...history.animes[animeId],
                            lastEps,
                            updatedAt: new Date().toISOString(),
                            url: epsId,
                        },
                    },
                })
            );
        } catch (error) {
            console.error(error);
            dispatch({ type: "setError" });
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
            type: "setStreamUrl",
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
            type: "setStreamUrl",
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
            type: "setStreamUrl",
            payload: {
                sources,
                nowWatching: sources[0].url,
                currentEpsNumber: numberOfEpisode,
                currentQuality: sources[0].quality,
            },
        });
    else throw new Error("Unexpected behaviour.");
}

export { useFavorite, FavoriteProvider };

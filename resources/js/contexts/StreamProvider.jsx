import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
    animeEpisodeData: {},
    isLoadingEpisodeData: false,
    currentStreamSrc: [],
    nowWatching: "",
    isCurrentStreamLoading: false,
    currentQuality: null,
};

const StreamContext = createContext(initialState);

function StreamProvider({ children }) {
    const [animeEpisodeData, setAnimeEpisodeData] = useState({});
    const [isLoadingEpisodeData, setIsLoadingEpisodeData] = useState(true);

    const [currentStreamSrc, setCurrentStreamSrc] = useState([]);
    const [nowWatching, setNowWatching] = useState("");
    const [isCurrentStreamLoading, setIsCurrentStreamLoading] = useState(false);

    const [currentQuality, setCurrentQuality] = useState(null);

    useEffect(function () {
        setIsLoadingEpisodeData(true);

        async function loadAnimeDetails(animeId) {
            try {
                const res = await fetch(
                    `https://api.consumet.org/anime/gogoanime/info/${animeId}`
                );
                const data = await res.json();

                setAnimeEpisodeData(data);
                const defaultEpisode = data?.episodes?.[0].id;
                if (!defaultEpisode) return setAnimeEpisodeData(null);

                handleChangeEpisode(defaultEpisode);
            } catch (error) {
                console.error(error.message);
            } finally {
                setIsLoadingEpisodeData(false);
            }
        }

        const animeId = window.location.hash.replace("#", "");

        if (animeId) loadAnimeDetails(animeId);
        else {
            setIsLoadingEpisodeData(false);
            setAnimeEpisodeData(null);
        }
    }, []);

    async function handleChangeEpisode(id) {
        setIsCurrentStreamLoading(true);
        try {
            const res = await fetch(
                `https://api.consumet.org/anime/gogoanime/watch/${id}`
            );
            const data = await res.json();

            const sources = data.sources;
            if (!sources) throw new Error("Anime not found. :(");

            setCurrentStreamSrc(sources);

            // initial auto play episode
            if (sources?.[2]) {
                // 720p
                setNowWatching(sources[2].url);
                setCurrentQuality(sources[2].quality);
            } else if (sources?.[1]) {
                // 480p
                setNowWatching(sources[1].url);
                setCurrentQuality(sources[1].quality);
            } else if (sources?.[0]) {
                // 360p
                setNowWatching(sources[0].url);
                setCurrentQuality(sources[0].quality);
            } else throw new Error("Unexpected behaviour.");
        } catch (error) {
            console.error(error.message);
        } finally {
            setIsCurrentStreamLoading(false);
        }
    }

    function handleSetNowWatching(src) {
        setNowWatching(src);
    }

    function handleSetQuality(quality) {
        setCurrentQuality(quality);
    }

    function handlePlayerReady(player) {
        // setNowWatching(player);

        player.on("waiting", () => {
            console.log("video is ready to play");
        });

        player.on("dispose", () => {
            // console.log("player will dispose");
        });
    }

    return (
        <StreamContext.Provider
            value={{
                animeEpisodeData,
                isLoadingEpisodeData,
                currentStreamSrc,
                nowWatching,
                isCurrentStreamLoading,
                currentQuality,

                // function
                handleSetNowWatching,
                handleChangeEpisode, // async
                handlePlayerReady,
                handleSetQuality,
            }}
        >
            {children}
        </StreamContext.Provider>
    );
}

function useStream() {
    const context = useContext(StreamContext);
    if (context === undefined)
        throw new Error("useStream was used outside of StreamProvider !");

    return context;
}

export { StreamProvider, useStream };

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
    const [animeId, setAnimeId] = useState();

    useEffect(function () {
        setIsLoadingEpisodeData(true);

        async function loadAnimeDetails(id) {
            try {
                // check if user have current anime history
                // use localStorage to resume last episode
                const history = JSON.parse(
                    localStorage.getItem("orange-juice")
                );

                const res = await fetch(
                    `https://api.consumet.org/anime/gogoanime/info/${id}`
                );

                if (!history) {
                    // if user don't have any history than generate history now
                    localStorage.setItem(
                        "orange-juice",
                        JSON.stringify({
                            anime: { [id]: { lastEps: 1, src: "" } },
                        })
                    );
                } else if (!history.anime?.[id]) {
                    // if user never watch current anime before
                    localStorage.setItem(
                        "orange-juice",
                        JSON.stringify({
                            ...history,
                            anime: {
                                ...history.anime,
                                [id]: { lastEps: 1, src: "" },
                            },
                        })
                    );
                } else {
                    // if user already have history then don't do anything here
                }

                const data = await res.json();

                setAnimeEpisodeData(data);

                const defaultEpisode = data?.episodes?.[0].id;
                if (!defaultEpisode) return setAnimeEpisodeData(null);

                handleChangeEpisode(defaultEpisode);
                setAnimeId(id);
            } catch (error) {
                console.error(error.message);
            } finally {
                setIsLoadingEpisodeData(false);
            }
        }

        const hashId = window.location.hash.replace("#", "");

        if (hashId) loadAnimeDetails(hashId);
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
            if (!sources) throw new Error("Fatal: sources not found :(");

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
            console.log("player stop at: " + player.currentTime());
        });

        player.on("ended", () => {
            console.log("Player finished");
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
                animeId,

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

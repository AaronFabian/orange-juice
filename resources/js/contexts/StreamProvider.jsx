import { createContext, useContext, useEffect, useState } from "react";

const orangeJuice = "orange-juice";

const initialState = {
    nowWatching: "",
    animeEpisodeData: {},
    currentStreamSrc: [],
    currentQuality: null,
    isLoadingEpisodeData: false,
    isCurrentStreamLoading: false,
};

const StreamContext = createContext(initialState);

function StreamProvider({ children }) {
    const [animeEpisodeData, setAnimeEpisodeData] = useState({});
    const [isLoadingEpisodeData, setIsLoadingEpisodeData] = useState(true);

    const [currentStreamSrc, setCurrentStreamSrc] = useState([]);
    const [nowWatching, setNowWatching] = useState("");
    const [isCurrentStreamLoading, setIsCurrentStreamLoading] = useState(false);

    const [currentQuality, setCurrentQuality] = useState(null);
    const [animeId, setAnimeId] = useState(null);

    useEffect(function () {
        setIsLoadingEpisodeData(true);

        async function loadAnimeDetails(id) {
            try {
                const res = await fetch(
                    `https://api.consumet.org/anime/gogoanime/info/${id}`
                );

                const data = await res.json();

                //  check if user have current anime history
                //  use localStorage to resume last episode
                const history = JSON.parse(localStorage.getItem(orangeJuice));

                // if user don't have any history than generate history now
                if (!history)
                    localStorage.setItem(
                        orangeJuice,
                        JSON.stringify({
                            animes: {
                                [id]: {
                                    id: id,
                                    lastEps: null,
                                    url: "",
                                    title: data.title,
                                    image: data.image,
                                    createdAt: new Date().toISOString(),
                                    updatedAt: "",
                                },
                            },
                        })
                    );
                // if user never watch current anime before add it
                else if (!history.animes?.[id])
                    localStorage.setItem(
                        orangeJuice,
                        JSON.stringify({
                            ...history,
                            animes: {
                                ...history.animes,
                                [id]: {
                                    id: id,
                                    lastEps: null,
                                    url: "",
                                    title: data.title,
                                    image: data.image,
                                    created_at: new Date().toISOString(),
                                    updated_at: "",
                                },
                            },
                        })
                    );
                else {
                    // if user already have history then don't do anything here
                }

                setAnimeEpisodeData(data);
                setAnimeId(id);
            } catch (error) {
                console.error(error);
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

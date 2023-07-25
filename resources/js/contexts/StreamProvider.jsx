import {
    URL_ANIME_DETAIL,
    URL_ANIME_STREAMING_LINK,
    addNewAnimeHistory,
    generateHistory,
    getHistory,
    orangeJuice,
} from "@/utils";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

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
                const res = await fetch(`${URL_ANIME_DETAIL}/${id}`);

                if (res.status !== 200) throw new Error("Anime not found !");
                const data = await res.json();

                //  check if user have current anime history
                //  use localStorage to resume last episode
                const history = getHistory();
                // if user don't have any history than generate history now
                if (!history) generateHistory(id, data.title, data.image);
                // if user never watch current anime before add it
                else if (!history.animes?.[id])
                    addNewAnimeHistory(history, id, data.title, data.image);
                else {
                    // if user already have history then don't do anything here
                }

                setAnimeEpisodeData(data);
                setAnimeId(id);
            } catch (error) {
                toast.error("Something gone wrong ! please check the URL.");
                setAnimeEpisodeData(null);
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
            const res = await fetch(`${URL_ANIME_STREAMING_LINK}/${id}`);
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

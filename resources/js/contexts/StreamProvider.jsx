import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
    animeList: [],
    isLoadingRecentEp: false,

    topAiringAnime: [],
    isLoadingTopAir: false,

    currentLocalPage: "home",
};

const StreamContext = createContext(initialState);

function StreamProvider({ children }) {
    const [animeList, setAnimeList] = useState([]);
    const [isLoadingRecentEp, setIsLoadingRecentEp] = useState(false);

    const [topAiringAnime, setTopAiringAnime] = useState([]);
    const [isLoadingTopAir, setIsLoadingTopAir] = useState(false);

    const [currentLocalPage, setCurrentLocalPage] = useState("home"); // local page 'home', 'stream'

    // application
    useEffect(function () {
        setIsLoadingRecentEp(true);
        async function loadRecentAnime() {
            try {
                const res = await fetch(
                    "https://api.consumet.org/anime/gogoanime/recent-episodes"
                );
                const data = await res.json();

                // console.log(data);
                setAnimeList(data.results);
            } catch (error) {
                console.error(error.message);
            } finally {
                setIsLoadingRecentEp(false);
            }
        }

        loadRecentAnime();
    }, []);

    // aside
    useEffect(function () {
        async function loadTopAiringAnime() {
            setIsLoadingTopAir(true);

            try {
                const res = await fetch(
                    "https://api.consumet.org/anime/gogoanime/top-airing"
                );
                const data = await res.json();

                // console.log(data);
                setTopAiringAnime(data.results);
            } catch (error) {
                console.error(error.message);
            } finally {
                setIsLoadingTopAir(false);
            }
        }

        loadTopAiringAnime();
    }, []);

    // auto set to stream in case url is already defined
    useEffect(function () {
        const hash = window.location.hash;
        if (hash) {
            setCurrentLocalPage("stream");
        }
    }, []);

    function handleChangeScreen(localScreen, localParams) {
        setCurrentLocalPage(localScreen);
        if (localParams) {
            window.location.hash = localParams;
        } else {
            window.location.hash = "";
        }
    }

    function handleSetAnimeList(list) {
        setAnimeList(list);
    }

    return (
        <StreamContext.Provider
            value={{
                animeList,
                isLoadingRecentEp,
                topAiringAnime,
                isLoadingTopAir,
                currentLocalPage,

                // function
                handleChangeScreen,
                handleSetAnimeList,
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

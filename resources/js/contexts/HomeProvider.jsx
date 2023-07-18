import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
    animeList: [],
    isLoadingRecentEp: false,

    topAiringAnime: [],
    isLoadingTopAir: false,

    currentLocalPage: "home",
};

const HomeContext = createContext(initialState);

function HomeProvider({ children }) {
    const [animeList, setAnimeList] = useState([]);
    const [isLoadingRecentEp, setIsLoadingRecentEp] = useState(false);

    const [topAiringAnime, setTopAiringAnime] = useState([]);
    const [isLoadingTopAir, setIsLoadingTopAir] = useState(false);

    const [isSearchLoading, setIsSearchLoading] = useState(false);

    const [currentLocalPage, setCurrentLocalPage] = useState("home"); // local page 'home', 'stream'

    // application
    useEffect(function () {
        setIsLoadingRecentEp(true);

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

    async function handleSearchAnime(inputedAnime) {
        try {
            setIsSearchLoading(true);

            const res = await fetch(
                `https://api.consumet.org/anime/gogoanime/${inputedAnime}`
            );
            const data = await res.json();
            if (!data.results.length) {
                return setCurrentLocalPage("not-found");
            }

            setAnimeList(data.results);
            setIsLoadingRecentEp(true);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSearchLoading(false);
            setIsLoadingRecentEp(false);
        }
    }

    function handleSetAnimeList(list) {
        setAnimeList(list);
    }

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

    return (
        <HomeContext.Provider
            value={{
                animeList,
                isLoadingRecentEp,
                topAiringAnime,
                isLoadingTopAir,
                currentLocalPage,
                isSearchLoading,

                // function
                handleChangeScreen,
                handleSetAnimeList,
                handleSearchAnime,
            }}
        >
            {children}
        </HomeContext.Provider>
    );
}

function useHome() {
    const context = useContext(HomeContext);
    if (context === undefined)
        throw new Error("useHome was used outside of HomeProvider !");

    return context;
}

export { HomeProvider, useHome };

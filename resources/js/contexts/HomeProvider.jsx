import { URL_ANIME_STREAMING_LINK } from '@/utils.jsx';
import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
    animeList: [],
    isLoadingRecentEp: false,

    topAiringAnime: [],
    isLoadingTopAir: false,

    isSearchLoading: false,

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
                const { data, status } = await axios.get(
                    `${URL_ANIME_STREAMING_LINK}/top-airing`
                );

                if (status !== 200)
                    throw new Error("Error top-airing not available");

                // console.log(data);
                setTopAiringAnime(data.results);
            } catch (error) {
                console.error(error);
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
        if (localParams) window.location.hash = localParams;
        else window.location.hash = "";
    }

    async function handleSearchAnime(inputedAnime) {
        try {
            setIsSearchLoading(true);

            const { data, status } = await axios.get(
                `${URL_ANIME_STREAMING_LINK}/${inputedAnime}`
            );

            if (status !== 200) throw new Error("Something gone wrong");

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
            const { data, status } = await axios.get(
                `${URL_ANIME_STREAMING_LINK}/recent-episodes`
            );

            if (status !== 200)
                throw new Error("Something gone wrong with recent episode");

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

import { useEffect, useState } from "react";

import Navbar from "../partials/Navbar";
import Section from "../partials/Section";

import Application from "../ui/Application";
import ApplicationLayout from "../ui/ApplicationLayout";
import Aside from "../ui/Aside";
import HomeHeader from "../ui/HomeHeader";
import StreamHoc from "./StreamHoc";

export default function Home() {
    const [animeList, setAnimeList] = useState([]);
    const [isLoadingRecentEp, setIsLoadingRecentEp] = useState(false);

    const [topAiringAnime, setTopAiringAnime] = useState([]);
    const [isLoadingTopAir, setIsLoadingTopAir] = useState(false);

    const [currentScreen, setCurrentScreen] = useState("home"); // local page 'home', 'stream'

    // application
    useEffect(function () {
        async function loadRecentAnime() {
            setIsLoadingRecentEp(true);

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
            setCurrentScreen("stream");
        }
    }, []);

    function handleChangeScreen(localScreen, localParams) {
        setCurrentScreen(localScreen);
        if (localParams) {
            window.location.hash = localParams;
        } else {
            window.location.hash = "";
        }
    }

    return (
        <>
            <Navbar />
            <Section>
                {currentScreen === "home" && (
                    <>
                        <Aside
                            topAiringAnime={topAiringAnime}
                            isLoading={isLoadingTopAir}
                        />
                        <ApplicationLayout>
                            <HomeHeader />
                            <Application
                                animeList={animeList}
                                setAnimeList={setAnimeList}
                                isLoading={isLoadingRecentEp}
                                onHandleChangeScreen={handleChangeScreen}
                            />
                        </ApplicationLayout>
                    </>
                )}

                {currentScreen === "stream" && (
                    <>
                        {/* In order to fetch the anime episode */}
                        <StreamHoc onHandleChangeScreen={handleChangeScreen} />
                    </>
                )}
            </Section>
        </>
    );
}

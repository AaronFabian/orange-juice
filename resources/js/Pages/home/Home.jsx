import { useEffect, useState } from "react";

import Navbar from "../partials/Navbar";
import Section from "../partials/Section";

import Application from "../ui/Application";
import ApplicationLayout from "../ui/ApplicationLayout";
import Aside from "../ui/Aside";
import HomeHeader from "../ui/HomeHeader";
import StreamHoc from "./StreamHoc";
import { StreamProvider, useStream } from "@/contexts/StreamProvider";

export default function Home() {
    const {
        animeList,
        isLoadingRecentEp,
        topAiringAnime,
        isLoadingTopAir,
        currentLocalPage: currentScreen,

        // function
        handleChangeScreen,
        handleSetAnimeList: setAnimeList,
    } = useStream();

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

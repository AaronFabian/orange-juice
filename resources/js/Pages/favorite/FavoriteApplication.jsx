import { useFavorite } from "@/contexts/FavoriteProvider";
import { useEffect, useState } from "react";

import Loading from "../ui/Loading";
import VideoJS from "@/Components/VideoJs";
import SelectEpisodePage from "./SelectEpisodePage";
import SelectEpisode from "./SelectEpisode";
import EpisodeController from "./EpisodeController";

export default function FavoriteApplication() {
    const {
        isLoading,
        episodeList,
        handleSetStreaming,
        nowWatching,
        handlePlayerReady,
        isChangingEpisode,
    } = useFavorite();

    // set algorythm
    useEffect(
        function () {
            if (!episodeList.length) return;

            handleSetStreaming();
        },
        [episodeList]
    );

    if (isLoading) return <Loading />;

    if (!isLoading && !episodeList.length)
        return (
            <h1 className="absolute left-0 right-0 text-xl font-medium text-center -translate-y-1/2 text-stone-950 top-1/2">
                Continue watching by clicking your favorite anime 😉
            </h1>
        );

    if (episodeList.length === null) {
        return <p>Anime could not be found ! 😵</p>;
    }

    // =================
    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
            {
                src: nowWatching,
                type: "application/x-mpegURL",
            },
        ],
    };

    return (
        <>
            {/* the else run when changing the episode */}
            {!isChangingEpisode ? (
                <div className="w-full min-h-[460px]">
                    <VideoJS
                        onReady={handlePlayerReady}
                        options={videoJsOptions}
                    />
                </div>
            ) : (
                <div className="w-full h-[460px] flex justify-center items-center text-stone-50">
                    Please wait...
                </div>
            )}

            {/* Hoc, to make currentPage already loaded*/}
            <EpisodeController />
        </>
    );
}

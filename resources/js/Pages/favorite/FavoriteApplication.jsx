import { useFavorite } from "@/contexts/FavoriteProvider";
import { useEffect, useState } from "react";

import Loading from "../ui/Loading";
import VideoJS from "@/Components/VideoJs";
import EpisodeController from "./EpisodeController";
import FavoritePageAlert from "./FavoritePageAlert";
import Background from "../partials/Background";

export default function FavoriteApplication() {
    const {
        isLoading,
        episodeList,
        handleSetStreaming,
        nowWatching,
        handlePlayerReady,
        isChangingEpisode,
        isError,
        animeDetails,
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
            <FavoritePageAlert>
                Continue watching by clicking your favorite anime 😉
            </FavoritePageAlert>
        );

    if (episodeList.length === null) {
        return (
            <FavoritePageAlert>Anime could not be found ! 😵</FavoritePageAlert>
        );
    }

    if (isError)
        return <FavoritePageAlert>Something gone wrong ! 😵</FavoritePageAlert>;

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

            <Background alt={animeDetails.title} src={animeDetails.image} />
        </>
    );
}

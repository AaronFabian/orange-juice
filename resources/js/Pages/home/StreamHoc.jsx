import { useEffect, useState } from "react";
import { useHome } from "@/contexts/HomeProvider";
import { useStream } from "@/contexts/StreamProvider";

import Aside from "../ui/Aside";
import ApplicationLayout from "../ui/ApplicationLayout";
import VideoJS from "@/Components/VideoJs";

export default function StreamHoc() {
    const { handleChangeScreen } = useHome();

    const {
        animeEpisodeData,
        isLoadingEpisodeData: isLoading,
        currentStreamSrc,
        nowWatching,
        isCurrentStreamLoading,
        currentQuality,

        // function
        handleSetNowWatching,
        handleChangeEpisode,
        handlePlayerReady,
    } = useStream();

    if (isLoading) {
        return <h1>Loading data...</h1>;
    }

    if (!animeEpisodeData) {
        return (
            <div>
                <h1>Anime not found 😓</h1>
                <button
                    className="text-sm hover:text-stone-50 active:text-gray-400"
                    onClick={() => handleChangeScreen("home")}
                >
                    &larr; Back to home
                </button>
            </div>
        );
    }

    const videoJsOptions = {
        autoplay: true,
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

    const { title, genres, totalEpisodes, image, type, status, description } =
        animeEpisodeData;
    const [season = "-", year = "-"] = type?.split(" ", 2);

    return (
        <>
            <Aside localScreen="stream" />
            <ApplicationLayout isAllowScroll={true}>
                <button
                    className="text-sm hover:text-stone-50 active:text-gray-400"
                    onClick={() => handleChangeScreen("home")}
                >
                    &larr; Back to home
                </button>

                {isCurrentStreamLoading && (
                    <div className="w-full h-[480px] flex justify-center items-center text-stone-50">
                        Please wait...
                    </div>
                )}

                {nowWatching && !isCurrentStreamLoading && (
                    <VideoJS
                        onReady={handlePlayerReady}
                        options={videoJsOptions}
                    />
                )}

                <div className="flex gap-4 mt-2">
                    <img className="w-48" src={image} alt="Spy x Family" />

                    <div>
                        <h1 className="mb-2 text-xl text-stone-50">{title}</h1>

                        <table className="table-auto">
                            <tbody>
                                <tr className="h-6 text-xs text-stone-50">
                                    <td className="w-20">Status:</td>
                                    <td>{status}</td>
                                </tr>
                                <tr className="h-6 text-xs text-stone-50">
                                    <td className="w-20">Episodes:</td>
                                    <td>{totalEpisodes}</td>
                                </tr>
                                <tr className="h-6 text-xs text-stone-50">
                                    <td className="w-20">Release date:</td>
                                    <td>{year}</td>
                                </tr>
                                <tr className="h-6 text-xs text-stone-50">
                                    <td className="w-20">Season:</td>
                                    <td className="capitalize">{season}</td>
                                </tr>
                                <tr className="text-xs text-stone-50">
                                    <td>Genres:</td>
                                    <td>
                                        {genres.map((genre) => genre + ", ")}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="mt-4 text-sm text-stone-50 line-clamp-4">
                            {description}
                        </p>
                    </div>
                </div>
            </ApplicationLayout>
        </>
    );
}

/* <iframe
    title="Video stream"
    src="https://anihdplay.com/streaming.php?id=MjAyNjQ3&title=%22Oshi+no+Ko%22+Episode+1&typesub=SUB"
    width={1280}
    height={720}
></iframe> */

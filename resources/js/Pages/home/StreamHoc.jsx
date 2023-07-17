import { useEffect, useState } from "react";

import Aside from "../ui/Aside";
import ApplicationLayout from "../ui/ApplicationLayout";
import VideoJS from "@/Components/VideoJs";

export default function StreamHoc({ onHandleChangeScreen }) {
    const [animeEpisodeData, setAnimeEpisodeData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const [currentStreamSrc, setCurrentStreamSrc] = useState([]);
    const [nowWatching, setNowWatching] = useState("");
    const [isCurrentStreamLoading, setIsCurrentStreamLoading] = useState(false);

    const [currentQuality, setCurrentQuality] = useState(null);

    useEffect(function () {
        setIsLoading(true);

        async function loadAnimeDetails(animeId) {
            try {
                const res = await fetch(
                    `https://api.consumet.org/anime/gogoanime/info/${animeId}`
                );
                const data = await res.json();

                console.log(data);
                setAnimeEpisodeData(data);
                const defaultEpisode = data?.episodes?.[0].id;
                if (!defaultEpisode)
                    return console.warn("Data not found StreamAside:21");

                handleChangeEpisode(defaultEpisode);
            } catch (error) {
                console.error(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        const animeId = window.location.hash.replace("#", "");

        if (animeId) loadAnimeDetails(animeId);
        else setIsLoading(false);
    }, []);

    async function handleChangeEpisode(id) {
        setIsCurrentStreamLoading(true);
        try {
            const res = await fetch(
                `https://api.consumet.org/anime/gogoanime/watch/${id}`
            );
            const data = await res.json();

            const sources = data.sources;
            if (!sources) throw new Error("Anime not found. :(");

            setCurrentStreamSrc(sources);

            // initial auto play episode
            if (sources?.[2]) {
                setNowWatching(sources[2].url);
                setCurrentQuality(sources[2].quality);
            } else if (sources?.[1]) {
                setNowWatching(sources[1].url);
                setCurrentQuality(sources[1].quality);
            } else if (sources?.[0]) {
                setNowWatching(sources[0].url);
                setCurrentQuality(sources[0].quality);
            } else throw new Error("Unexpected behaviour.");
        } catch (error) {
            console.error(error.message);
        } finally {
            setIsCurrentStreamLoading(false);
        }
    }

    function handleSetNowWatching(src) {
        setNowWatching(src);
    }

    function handlePlayerReady(player) {
        // setNowWatching(player);

        player.on("waiting", () => {
            console.log("player is ready to play");
        });

        player.on("dispose", () => {
            console.log("player will dispose");
        });
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

    if (isLoading) {
        return <h1>Loading data...</h1>;
    }

    const {
        id,
        title,
        url,
        genres,
        totalEpisodes,
        image,
        type,
        status,
        episodes,
        description,
    } = animeEpisodeData;
    const [season = "-", year = "-"] = type.split(" ", 2);

    return (
        <>
            <Aside
                localScreen="stream"
                episodes={episodes}
                isLoading={isLoading}
                currentQuality={currentQuality}
                currentStreamSrc={currentStreamSrc}
                onHandleChangeScreen={onHandleChangeScreen}
                onHandleChangeEpisode={handleChangeEpisode}
                onHandleSetNowWatching={handleSetNowWatching}
            />
            <ApplicationLayout isAllowScroll={true}>
                <button
                    className="text-sm hover:text-stone-50 active:text-gray-400"
                    onClick={() => onHandleChangeScreen("home")}
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

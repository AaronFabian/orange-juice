import { useEffect, useState } from "react";
import Aside from "../ui/Aside";
import ApplicationLayout from "../ui/ApplicationLayout";
import { Link } from "@inertiajs/react";

export default function StreamHoc({ onHandleChangeScreen }) {
    const [animeEpisodeData, setAnimeEpisodeData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const [currentStreamSrc, setCurrentStreamSrc] = useState([]);
    const [nowWatching, setNowWatching] = useState("test");
    const [isCurrentStreamLoading, setIsCurrentStreamLoading] = useState(false);

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

            setCurrentStreamSrc(data.sources);
        } catch (error) {
            console.error(error.message);
        } finally {
            setIsCurrentStreamLoading(false);
        }
    }

    if (isLoading) {
        return <h1>Loading data...</h1>;
    }

    console.log(currentStreamSrc);

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
    const [season, year] = type.split(" ", 2);

    return (
        <>
            <Aside
                localScreen="stream"
                episodes={episodes}
                onHandleChangeScreen={onHandleChangeScreen}
                onHandleChangeEpisode={handleChangeEpisode}
            />
            <ApplicationLayout isAllowScroll={true}>
                <button
                    className="text-sm hover:text-stone-50 active:text-gray-400"
                    onClick={() => onHandleChangeScreen("home")}
                >
                    &larr; Back to home
                </button>

                {/* <iframe
                    title="Video stream"
                    src="https://anihdplay.com/streaming.php?id=MjAyNjQ3&title=%22Oshi+no+Ko%22+Episode+1&typesub=SUB"
                    width={1280}
                    height={720}
                ></iframe> */}
                {isCurrentStreamLoading && (
                    <div className="w-full h-[480px] flex justify-center items-center text-stone-50">
                        Please wait...
                    </div>
                )}
                {nowWatching && !isCurrentStreamLoading ? (
                    <video
                        width="352"
                        height="198"
                        controls
                        preload="auto"
                        className="w-full h-[480px]"
                    >
                        <source
                            src="https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.360.m3u8"
                            type="application/x-mpegURL"
                        />
                    </video>
                ) : null}
                {/* <div className="w-full h-[480px]"></div> */}

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

import { useEffect, useState } from "react";
import { useStream } from "@/contexts/StreamProvider";

import styles from "./HomeAside.module.css";
import SelectEpisodePage from "./SelectEpisodePage";
import SelectAnimeEpisodes from "./SelectAnimeEpisodes";

export default function StreamAside() {
    const [currentEpsPage, setCurrentEpsPage] = useState(1);
    const [currentSelectedEps, setCurrentSelectedEps] = useState(null);
    const {
        animeId,
        currentStreamSrc,
        currentQuality,
        handleSetNowWatching,
        handleChangeEpisode,
        handleSetQuality,
        animeEpisodeData: { episodes },
    } = useStream();

    function handleOverwriteHistory(lastEps, perEpisodeId) {
        const history = JSON.parse(localStorage.getItem("orange-juice"));
        localStorage.setItem(
            "orange-juice",
            JSON.stringify({
                ...history,
                animes: {
                    ...history.animes,
                    [animeId]: {
                        ...history.animes[animeId],
                        id: animeId,
                        lastEps,
                        url: perEpisodeId,
                        updatedAt: new Date().toISOString(),
                    },
                },
            })
        );
    }

    useEffect(
        function () {
            const { animes } = JSON.parse(localStorage.getItem("orange-juice"));
            if (!currentStreamSrc.length) {
                const history = animes[animeId];
                if (!history.lastEps) {
                    const defaultEpisode = episodes?.[0]?.id;
                    if (!defaultEpisode) throw new Error("Sources not found !");
                    // no need setCurrentSelectedEps
                    handleChangeEpisode(defaultEpisode);
                    setCurrentSelectedEps(1);
                } else {
                    handleChangeEpisode(history.url);
                    setCurrentSelectedEps(history.lastEps);
                    setCurrentEpsPage(Math.ceil(history.lastEps / 25));
                }
            } else {
                // the next rendering will auto continuing last episode

                // initial auto play episode
                if (currentStreamSrc?.[2]) {
                    // 720p
                    handleSetNowWatching(currentStreamSrc[2].url);
                    handleSetQuality(currentStreamSrc[2].quality);
                } else if (currentStreamSrc?.[1]) {
                    // 480p
                    handleSetNowWatching(currentStreamSrc[1].url);
                    handleSetQuality(currentStreamSrc[1].quality);
                } else if (currentStreamSrc?.[0]) {
                    // 360p
                    handleSetNowWatching(currentStreamSrc[0].url);
                    handleSetQuality(currentStreamSrc[0].quality);
                } else throw new Error("Unexpected behaviour.");
            }
        },
        [animeId, currentStreamSrc]
    );

    return (
        <div
            className={`h-full px-3 py-4 overflow-y-auto  ${styles.scrollGotoLeft} `}
        >
            <div className={` ${styles.scrollDefault}`}>
                <SelectEpisodePage
                    onSetCurrentEpsPage={setCurrentEpsPage}
                    currentEpsPage={currentEpsPage}
                />
                <SelectAnimeEpisodes
                    currentEps={currentEpsPage}
                    currentSelectedEps={currentSelectedEps}
                    onSetCurrentSelectedEps={setCurrentSelectedEps}
                    onHandleOverwriteHistory={handleOverwriteHistory}
                />

                {currentStreamSrc != undefined && currentStreamSrc.length ? (
                    <div className="mt-5">
                        <h3 className="text-stone-50 ">Video Quality</h3>
                        <div className="grid grid-cols-5 mt-1 gap-0.5">
                            {currentStreamSrc.map((source) => (
                                <StreamQualityItem
                                    source={source}
                                    active={currentQuality === source.quality}
                                    handleSetNowWatching={handleSetNowWatching}
                                    key={source.url}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <h1 className="mt-5 text-sm text-stone-50">
                        Almost there... 😉
                    </h1>
                )}
            </div>
        </div>
    );
}

function StreamQualityItem({ source, handleSetNowWatching, active }) {
    // if (source.quality === "backup") return null;
    // if (source.quality === "default") return null;

    const { handleSetQuality } = useStream();

    return (
        <button
            className={`h-6  duration-300 transition-all border text-stone-50 text-xs border-stone-50 group hover:bg-[#F4BEA7] cursor-pointer ${
                active && "bg-[#F4BEA7]"
            }`}
            onClick={() => {
                handleSetNowWatching(source.url);
                handleSetQuality(source.quality);
            }}
        >
            {source.quality}
        </button>
    );
}

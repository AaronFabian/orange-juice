import { useEffect, useState } from "react";
import { useStream } from "@/contexts/StreamProvider";

import styles from "./HomeAside.module.css";

export default function StreamAside() {
    const [currentEps, setCurrentEpsPage] = useState(1);
    const [currentSelectedEps, setCurrentSelectedEps] = useState(1);
    const {
        animeEpisodeData: { episodes },
        currentStreamSrc,
        currentQuality,
        handleChangeEpisode,
        handleSetNowWatching,
        animeId,
    } = useStream();

    const episodesLength = episodes.length;
    const episodePage = Math.ceil(episodesLength / 25);

    useEffect(function () {
        const history = JSON.parse(localStorage.getItem("orange-juice"));

        // TODO:
        //   console.log(history);
    }, []);

    return (
        <div
            className={`h-full px-3 py-4 overflow-y-auto  ${styles.scrollGotoLeft} `}
        >
            <div className={` ${styles.scrollDefault}`}>
                <div className="flex flex-col gap-1">
                    <h3 className="inline text-left text-stone-50">
                        Select episodes
                    </h3>
                    <select
                        id="countries"
                        className="block h-8 text-xs placeholder-gray-400 bg-transparent border border-gray-300 rounded-none w-28 text-stone-50 bg-gray-50 focus:ring-[#F4BEA7] focus:border-[#F4BEA7]"
                        defaultValue="1"
                        onChange={(e) =>
                            setCurrentEpsPage(Number(e.target.value))
                        }
                    >
                        {Array.from({ length: episodePage }, (_, index) => (
                            <option
                                value={index + 1}
                                className="text-stone-950"
                                key={index}
                            >
                                {index * 25 + 1} -{" "}
                                {(index + 1) * 25 <= episodesLength + 1
                                    ? (index + 1) * 25
                                    : episodesLength}
                            </option>
                        ))}
                    </select>
                </div>
                <ul
                    className={`font-medium text-xs gap-0.5 text-stone-50 grid grid-cols-5 h-36 pt-1.5`}
                >
                    {episodes
                        .slice((currentEps - 1) * 25, currentEps * 25)
                        .map((episode) => {
                            return (
                                <li
                                    className={`h-6 duration-300 transition-all border border-stone-50 group hover:bg-[#F4BEA7] cursor-pointer  ${
                                        currentSelectedEps === episode.number &&
                                        "bg-[#FABEA7]"
                                    }`}
                                    key={episode.id}
                                >
                                    <button
                                        className="w-full leading-6 group-hover:text-stone-950"
                                        onClick={() => {
                                            setCurrentSelectedEps(
                                                episode.number
                                            );
                                            handleChangeEpisode(episode.id);
                                        }}
                                    >
                                        {episode.number}
                                    </button>
                                </li>
                            );
                        })}
                </ul>

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

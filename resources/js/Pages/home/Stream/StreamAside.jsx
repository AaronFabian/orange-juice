import { Link } from "@inertiajs/react";
import styles from "../../ui/Aside.module.css";
import { useEffect, useState } from "react";

export default function StreamAside({
    episodes,
    isLoading,
    currentStreamSrc,
    currentQuality,
    onHandleChangeEpisode,
    onHandleSetNowWatching,
    onHandleChangeScreen,
}) {
    const [currentEps, setCurrentEps] = useState(1);

    const episodesLength = episodes.length;
    const episodePage = Math.ceil(episodesLength / 25);

    // use localStorage to resume last episode
    useEffect(function () {
        // set to episode 1 (for a moment)
        // const defaultEpisode = episodes?.[0].id;
        // if (!defaultEpisode)
        //     return console.warn("Data not found StreamAside:21");

        setCurrentEps(1);
        // onHandleChangeEpisode(defaultEpisode);
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
                        onChange={(e) => setCurrentEps(Number(e.target.value))}
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
                        .map((episode) => (
                            <li
                                className={`h-6 duration-300 transition-all border border-stone-50 group hover:bg-[#F4BEA7] cursor-pointer `}
                                key={episode.id}
                            >
                                <button
                                    className="w-full leading-6 group-hover:text-stone-950"
                                    onClick={() =>
                                        onHandleChangeEpisode(episode.id)
                                    }
                                >
                                    {episode.number}
                                </button>
                            </li>
                        ))}
                </ul>

                {currentStreamSrc != undefined && currentStreamSrc.length ? (
                    <div className="mt-5">
                        <h3 className="text-stone-50 ">Video Quality</h3>
                        <div className="grid grid-cols-5 mt-1 gap-0.5">
                            {currentStreamSrc.map((source) => (
                                <StreamQualityItem
                                    source={source}
                                    active={currentQuality === source.quality}
                                    onHandleSetNowWatching={
                                        onHandleSetNowWatching
                                    }
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

function StreamQualityItem({ source, onHandleSetNowWatching, active }) {
    if (source.quality === "backup") return null;
    if (source.quality === "default") return null;

    return (
        <button
            className={`h-6  duration-300 transition-all border text-stone-50 text-xs border-stone-50 group hover:bg-[#F4BEA7] cursor-pointer ${
                active && "bg-[#F4BEA7]"
            }`}
            onClick={() => onHandleSetNowWatching(source.url)}
        >
            {source.quality}
        </button>
    );
}

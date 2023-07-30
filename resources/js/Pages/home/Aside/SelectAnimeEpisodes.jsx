import { useStream } from "@/contexts/StreamProvider";

export default function SelectAnimeEpisodes({
    currentEps,
    currentSelectedEps,
    onSetCurrentSelectedEps,
    onHandleOverwriteHistory,
}) {
    const {
        animeEpisodeData: { episodes },
        handleChangeEpisode,
    } = useStream();

    return (
        <ul
            className={`font-medium text-xs gap-0.5 text-stone-50 grid grid-cols-5  pt-1.5`}
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
                                    onSetCurrentSelectedEps(episode.number);
                                    handleChangeEpisode(episode.id);
                                    onHandleOverwriteHistory(
                                        episode.number,
                                        episode.id
                                    );
                                }}
                            >
                                {episode.number}
                            </button>
                        </li>
                    );
                })}
        </ul>
    );
}

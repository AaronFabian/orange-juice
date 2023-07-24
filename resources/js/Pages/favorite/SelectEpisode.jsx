import { useFavorite } from "@/contexts/FavoriteProvider";

export default function SelectEpisode({
    currentPage,
    currentEpisode,
    setCurrentEpisode,
}) {
    const { episodeList, handleChangingEpisode } = useFavorite();

    function handleChangeEpisode(episode) {
        if (currentEpisode === episode.number) return;
        setCurrentEpisode(episode.number);
        handleChangingEpisode(episode.id, episode.number);
    }

    return (
        <ul className="font-medium text-xs gap-0.5 text-stone-50 grid grid-cols-5 pt-1.5 mb-2 w-fit">
            {episodeList
                .slice((currentPage - 1) * 25, currentPage * 25)
                .map((episode) => {
                    return (
                        <li
                            className={`h-6 duration-300 transition-all border 
                    border-stone-50 group  hover:bg-[#F4BEA7] cursor-pointer  ${
                        currentEpisode === episode.number && "bg-[#FABEA7]"
                    }`}
                            key={episode.id}
                        >
                            <button
                                className="w-full leading-6 px-2.5 group-hover:text-stone-950"
                                onClick={() => handleChangeEpisode(episode)}
                            >
                                {episode.number}
                            </button>
                        </li>
                    );
                })}
        </ul>
    );
}

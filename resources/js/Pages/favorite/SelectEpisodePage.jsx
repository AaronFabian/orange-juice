import { useFavorite } from "@/contexts/FavoriteProvider";

export default function SelectEpisodePage({ currentPage, setCurrentPage }) {
    const { episodeList } = useFavorite();

    const episodesLength = episodeList.length;
    const episodePage = Math.ceil(episodeList.length / 25);

    return (
        <div className="flex flex-col gap-1 mt-4">
            <h3 className="inline text-left text-stone-50">Select episodes</h3>
            <select
                id="countries"
                className="block h-8 text-xs placeholder-gray-400 bg-transparent border border-gray-300 rounded-none w-28 text-stone-50 bg-gray-50 focus:ring-[#F4BEA7] focus:border-[#F4BEA7]"
                value={currentPage}
                onChange={(e) => setCurrentPage(Number(e.target.value))}
            >
                {Array.from({ length: episodePage }, (_, index) => (
                    <option
                        value={index + 1}
                        className="text-stone-950"
                        key={index}
                    >
                        {index * 25 + 1} -{" "}
                        {(index + 1) * 25 <= episodesLength
                            ? (index + 1) * 25
                            : episodesLength}
                    </option>
                ))}
            </select>
        </div>
    );
}

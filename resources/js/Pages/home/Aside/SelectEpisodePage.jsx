import { useStream } from "@/contexts/StreamProvider";

export default function SelectEpisodePage({
    currentEpsPage,
    onSetCurrentEpsPage,
}) {
    const {
        animeEpisodeData: { episodes },
    } = useStream();

    const episodesLength = episodes.length;
    const episodePage = Math.ceil(episodesLength / 25);

    return (
        <div className="flex flex-col gap-1">
            <h3 className="inline text-left text-stone-50">Select episodes</h3>
            <select
                id="countries"
                className="block h-8 text-xs placeholder-gray-400 bg-transparent border border-gray-300 rounded-none w-28 text-stone-50 bg-gray-50 focus:ring-[#F4BEA7] focus:border-[#F4BEA7]"
                value={currentEpsPage}
                onChange={(e) => onSetCurrentEpsPage(Number(e.target.value))}
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

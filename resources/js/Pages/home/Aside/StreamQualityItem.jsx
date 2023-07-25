export default function StreamQualityItem({
    source,
    handleSetNowWatching,
    active,
    onHandleSetQuality,
}) {
    // if (source.quality === "backup") return null;
    // if (source.quality === "default") return null;

    return (
        <button
            className={`h-6  duration-300 transition-all border text-stone-50 text-xs border-stone-50 group hover:bg-[#F4BEA7] cursor-pointer ${
                active && "bg-[#F4BEA7]"
            }`}
            onClick={() => {
                handleSetNowWatching(source.url);
                onHandleSetQuality(source.quality);
            }}
        >
            {source.quality}
        </button>
    );
}

import { useStream } from "@/contexts/StreamProvider";
import StreamQualityItem from "./StreamQualityItem";

export default function QualityButton() {
    const {
        currentQuality,
        currentStreamSrc,
        handleSetNowWatching,
        handleSetQuality,
    } = useStream();

    return currentStreamSrc != undefined && currentStreamSrc.length ? (
        <div className="mt-5">
            <h3 className="text-stone-50 ">Video Quality</h3>
            <div className="grid grid-cols-5 mt-1 gap-0.5">
                {currentStreamSrc.map((source) => (
                    <StreamQualityItem
                        source={source}
                        active={currentQuality === source.quality}
                        handleSetNowWatching={handleSetNowWatching}
                        onHandleSetQuality={handleSetQuality}
                        key={source.url}
                    />
                ))}
            </div>
        </div>
    ) : (
        <h1 className="mt-5 text-sm text-stone-50 min-h-[100dvh] sm:min-h-0">
            Almost there... 😉
        </h1>
    );
}

import { FAVORITE, useFavorite } from "@/contexts/FavoriteProvider";
import { useEffect, useState } from "react";

export default function SelectQuality() {
    const { qualitySrc, currentQuality, dispatch } = useFavorite();

    // manage state this component
    const [quality, setCurrentQuality] = useState(null);

    useEffect(
        function () {
            setCurrentQuality(currentQuality);
        },
        [currentQuality]
    );

    return (
        <div className="mt-5">
            <h3 className="text-stone-50 ">Video Quality</h3>
            <div className="grid grid-cols-5 mt-1 gap-0.5 w-fit">
                {qualitySrc.map((source) => (
                    <button
                        key={source.url}
                        className={`py-1 px-1.5 duration-300 transition-all border text-stone-50 text-xs border-stone-50 group hover:bg-[#F4BEA7] cursor-pointer ${
                            quality === source.quality && "bg-[#F4BEA7]"
                        }`}
                        onClick={() => {
                            dispatch({
                                type: FAVORITE.SET_QUALITY,
                                payload: {
                                    quality: source.quality,
                                    nowWatching: source.url,
                                },
                            });
                            setCurrentQuality(source.quality);
                        }}
                    >
                        {source.quality}
                    </button>
                ))}
            </div>
        </div>
    );
}

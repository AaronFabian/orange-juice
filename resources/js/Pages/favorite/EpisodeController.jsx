import { useFavorite } from "@/contexts/FavoriteProvider";
import SelectEpisodePage from "./SelectEpisodePage";
import SelectEpisode from "./SelectEpisode";
import { useState } from "react";
import SelectQuality from "./SelectQuality";

export default function EpisodeController() {
    const { currentEpsNumber } = useFavorite();
    const [currentEpisode, setCurrentEpisode] = useState(currentEpsNumber);
    const [currentPage, setCurrentPage] = useState(
        Math.ceil(currentEpsNumber / 25)
    );

    return (
        <>
            <SelectEpisodePage
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            <SelectEpisode
                currentPage={currentPage}
                currentEpisode={currentEpisode}
                setCurrentEpisode={setCurrentEpisode}
            />

            <SelectQuality />
        </>
    );
}

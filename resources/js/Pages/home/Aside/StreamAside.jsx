import { useEffect, useState } from "react";
import { useStream } from "@/contexts/StreamProvider";
import { router } from "@inertiajs/react";

import styles from "./HomeAside.module.css";
import SelectEpisodePage from "./SelectEpisodePage";
import SelectAnimeEpisodes from "./SelectAnimeEpisodes";
import QualityButton from "./QualityButton";
import { getHistory, overWriteHistory } from "@/utils";

export default function StreamAside() {
    const [currentEpsPage, setCurrentEpsPage] = useState(1);
    const [currentSelectedEps, setCurrentSelectedEps] = useState(null);
    const {
        animeId,
        currentStreamSrc,
        handleSetNowWatching,
        handleChangeEpisode,
        handleSetQuality,
        animeEpisodeData: { episodes },
    } = useStream();

    function handleOverwriteHistory(lastEps, perEpisodeId) {
        overWriteHistory(animeId, lastEps, perEpisodeId);
    }

    useEffect(
        function () {
            if (!currentStreamSrc.length) {
                const history = getHistory();
                if (!history) router.visit("/"); // restart app in case user delete history

                const animes = history?.animes;
                const historyAnime = animes[animeId];
                if (!historyAnime.lastEps) {
                    const defaultEpisode = episodes?.[0]?.id;
                    if (!defaultEpisode) throw new Error("Sources not found !");
                    // no need setCurrentSelectedEps
                    handleChangeEpisode(defaultEpisode);
                    setCurrentSelectedEps(1);
                } else {
                    handleChangeEpisode(historyAnime.url);
                    setCurrentSelectedEps(historyAnime.lastEps);
                    setCurrentEpsPage(Math.ceil(historyAnime.lastEps / 25));
                }
            } else {
                // the next rendering will auto continuing last episode

                // initial auto play episode
                if (currentStreamSrc?.[2]) {
                    // 720p
                    handleSetNowWatching(currentStreamSrc[2].url);
                    handleSetQuality(currentStreamSrc[2].quality);
                } else if (currentStreamSrc?.[1]) {
                    // 480p
                    handleSetNowWatching(currentStreamSrc[1].url);
                    handleSetQuality(currentStreamSrc[1].quality);
                } else if (currentStreamSrc?.[0]) {
                    // 360p
                    handleSetNowWatching(currentStreamSrc[0].url);
                    handleSetQuality(currentStreamSrc[0].quality);
                } else throw new Error("Unexpected behaviour.");
            }
        },
        [animeId, currentStreamSrc]
    );

    return (
        <div
            className={`h-full px-3 py-4 overflow-y-auto  ${styles.scrollGotoLeft} `}
        >
            <div className={` ${styles.scrollDefault}`}>
                <SelectEpisodePage
                    onSetCurrentEpsPage={setCurrentEpsPage}
                    currentEpsPage={currentEpsPage}
                />
                <SelectAnimeEpisodes
                    currentEps={currentEpsPage}
                    currentSelectedEps={currentSelectedEps}
                    onSetCurrentSelectedEps={setCurrentSelectedEps}
                    onHandleOverwriteHistory={handleOverwriteHistory}
                />

                <QualityButton />
            </div>
        </div>
    );
}

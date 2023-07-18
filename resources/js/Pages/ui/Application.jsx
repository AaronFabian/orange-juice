import { useEffect, useState } from "react";
import { useHome } from "@/contexts/HomeProvider";

import LinkPagination from "../partials/LinkPagination";

export default function Application() {
    const { animeList, isLoadingRecentEp } = useHome();

    const [pageLength, setPageLength] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(
        function () {
            setPageLength(Math.ceil(animeList.length / 6));
            setCurrentPage(1);
        },
        [animeList.length]
    );

    function handleChangePage(page) {
        setCurrentPage(page);
    }

    function handleNextOrPrevPage(goto) {
        if (goto === "next") {
            if (currentPage + 1 <= pageLength) setCurrentPage(currentPage + 1);
        } else if (currentPage - 1 >= 1) setCurrentPage(currentPage - 1);
    }

    if (isLoadingRecentEp) {
        return <h1 className="text-stone-50">Please wait...</h1>;
    }

    return (
        <>
            <div className="grid w-full h-[32rem] grid-cols-2 gap-2 py-2 mx-auto border-l border-r border-b px-4 rounded-b-md md:grid-cols-3">
                {animeList
                    .slice((currentPage - 1) * 6, currentPage * 6)
                    .map((anime) => (
                        <AnimeCard
                            title={anime.title}
                            release={anime?.episodeNumber ?? 0}
                            imgSrc={anime.image}
                            animeId={anime.id}
                            key={anime.id}
                        />
                    ))}
            </div>

            <div className="flex items-center justify-between h-14">
                <button
                    className="w-24 h-8 rounded-full bg-purple_mood hover:bg-purple_mood_hard hover:text-stone-200 active:text-stone-500"
                    onClick={() => handleNextOrPrevPage("previous")}
                >
                    Previous
                </button>

                <div className="space-x-2">
                    {Array.from({ length: pageLength }, (_, index) => (
                        <LinkPagination
                            active={index + 1 === currentPage}
                            onClick={handleChangePage}
                            key={index}
                        >
                            {index + 1}
                        </LinkPagination>
                    ))}
                </div>

                <button
                    className="w-24 h-8 rounded-full bg-purple_mood hover:bg-purple_mood_hard hover:text-stone-200 active:text-stone-500"
                    onClick={() => handleNextOrPrevPage("next")}
                >
                    Next
                </button>
            </div>
        </>
    );
}

function AnimeCard({ title, release, imgSrc, animeId }) {
    const { handleChangeScreen } = useHome();

    return (
        <div
            className="relative overflow-hidden rounded-md group hover:cursor-pointer"
            onClick={() => handleChangeScreen("stream", animeId)}
        >
            <img
                src={`${imgSrc}`}
                alt={title}
                className="object-cover object-center w-full h-full align-middle"
            />
            <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-center h-16 duration-150 translate-y-full group-hover:translate-y-0 bg-stone-950/60">
                <h3 className="text-lg text-center text-purple_mood">
                    {title}
                </h3>
                <p className="text-xs text-stone-50">
                    {release ? "Episodes : " : ""} {release ? release : ""}
                </p>
            </div>
        </div>
    );
}

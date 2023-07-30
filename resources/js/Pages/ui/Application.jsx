import { useEffect, useState } from "react";
import { useHome } from "@/contexts/HomeProvider";

import LinkPagination from "../partials/LinkPagination";
import Loading from "./Loading";

export default function Application() {
    const { animeList, isLoadingRecentEp } = useHome();

    const [currentPage, setCurrentPage] = useState(1);
    const pageLength = Math.ceil(animeList.length / 6);

    function handleChangePage(page) {
        setCurrentPage(page);
    }

    function handleNextOrPrevPage(goto) {
        if (goto === "next") {
            if (currentPage + 1 <= pageLength) setCurrentPage(currentPage + 1);
        } else if (currentPage - 1 >= 1) setCurrentPage(currentPage - 1);
    }

    useEffect(
        function () {
            setCurrentPage(1);
        },
        [animeList.length]
    );

    if (isLoadingRecentEp) return <Loading />;

    return (
        <>
            <p className="px-3 text-stone-50 sm:hidden">Recently update</p>
            <div className="grid w-full h-72 sm:h-[30rem] lg:h-[32rem]  gap-2 py-2 mx-auto sm:border-l sm:border-r sm:border-b px-4 rounded-b-md grid-cols-3">
                {animeList
                    .slice((currentPage - 1) * 6, currentPage * 6)
                    .map((anime) => (
                        <AnimeCard
                            title={anime.title}
                            episodes={anime?.episodeNumber ?? 0}
                            imgSrc={anime.image}
                            animeId={anime.id}
                            key={anime.id}
                        />
                    ))}
            </div>

            <div className="flex items-center justify-between h-10 px-4 sm:h-14 sm:px-0">
                <button
                    className="hidden w-24 h-8 rounded-full sm:inline bg-purple_mood hover:bg-purple_mood_hard hover:text-stone-200 active:text-stone-500"
                    onClick={() => handleNextOrPrevPage("previous")}
                >
                    Previous
                </button>
                <button
                    className="px-2 rounded-full sm:hidden bg-purple_mood hover:bg-purple_mood_hard hover:text-stone-200 active:text-stone-500"
                    onClick={() => handleNextOrPrevPage("previous")}
                >
                    &laquo;
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
                    className="hidden w-24 h-8 rounded-full sm:inline bg-purple_mood hover:bg-purple_mood_hard hover:text-stone-200 active:text-stone-500"
                    onClick={() => handleNextOrPrevPage("next")}
                >
                    Next
                </button>
                <button
                    className="px-2 rounded-full sm:hidden bg-purple_mood hover:bg-purple_mood_hard hover:text-stone-200 active:text-stone-500"
                    onClick={() => handleNextOrPrevPage("next")}
                >
                    &raquo;
                </button>
            </div>
        </>
    );
}

function AnimeCard({ title, episodes, imgSrc, animeId }) {
    const { handleChangeScreen } = useHome();

    return (
        <div
            className="relative overflow-hidden transition-all rounded-md group hover:cursor-pointer"
            onClick={() => handleChangeScreen("stream", animeId)}
        >
            <img
                src={`${imgSrc}`}
                alt={title}
                className="object-cover object-center w-full h-full align-middle duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-center h-16 duration-300 bg-stone-950/60">
                <h3
                    className="text-sm text-center sm:text-lg line-clamp-1 text-purple_mood"
                    title={title}
                >
                    {title}
                </h3>
                <p className="text-xxs sm:text-xs text-stone-50">
                    {episodes ? "Episodes : " : ""} {episodes ? episodes : ""}
                </p>
            </div>
        </div>
    );
}

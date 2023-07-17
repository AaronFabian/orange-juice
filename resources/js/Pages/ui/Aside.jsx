import { useEffect, useState } from "react";

import StreamAside from "../home/Stream/StreamAside";

import styles from "./Aside.module.css";
import { useHome } from "@/contexts/HomeProvider";

export default function Aside({
    // in stream
    episodes = [],
}) {
    return (
        <>
            {/* will hidden in smartphone */}
            <DesktopAside episodes={episodes} />

            {/* Different aside will hidden in desktop */}
            <SmartPhoneAside />
        </>
    );
}

function DesktopAside({ episodes }) {
    const { currentLocalPage } = useHome();

    return (
        <aside
            id="default-sidebar"
            className="w-60 h-[40rem] transition-transform hidden -translate-x-full sm:translate-x-0 sm:block bg-black"
            aria-label="Sidebar"
        >
            {currentLocalPage === "stream" && (
                <StreamAside episodes={episodes} />
            )}

            {currentLocalPage === undefined ||
                (currentLocalPage === "home" && <AnimeList />)}
        </aside>
    );
}

// ===============
// local component
function SmartPhoneAside() {
    return (
        <aside className="sm:hidden">
            <div className="grid grid-cols-2 gap-2 p-2">
                {/* <AnimeItemSmartPhone />
                <AnimeItemSmartPhone /> */}
            </div>
        </aside>
    );
}

function AnimeList() {
    const { topAiringAnime } = useHome();

    // * For performance: use window width
    // * for decrease unnecessary map looping
    const windowWidth = window.innerWidth;

    return windowWidth > 640 ? (
        <div
            className={`h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black ${styles.scrollGotoLeft} -scroll`}
        >
            <ul className={`space-y-2 font-medium ${styles.scrollDefault}`}>
                {topAiringAnime.map((anime) => (
                    <AnimeItem anime={anime} key={anime.id} />
                ))}
            </ul>
        </div>
    ) : (
        topAiringAnime.map((anime) => (
            <div className="p-2 overflow-hidden rounded shadow-xl">
                <img
                    className="block w-11/12 pt-2 mx-auto"
                    src="/img/pv_1.png"
                    alt="Sunset in the mountains"
                />
                <div className="px-2 py-4">
                    <div className="mb-2 text-sm font-bold">{anime.title}</div>
                    <p className="text-xs text-gray-700 line-clamp-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-2 pb-2">
                    {...anime.genre.map((a) => (
                        <span className="inline-block px-2 py-1 mb-1 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                            {a}
                        </span>
                    ))}
                </div>
            </div>
        ))
    );
}

function AnimeItem({ anime }) {
    const { id, title, genres, image, url } = anime;

    return (
        <li>
            <div
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                <img className="h-16 w-14" src={image} alt={title} />
                <div className="self-start ml-3 leading-tight ">
                    <p className="text-sm line-clamp-2 text-[#C991E9]">
                        {title}
                    </p>
                    <p className="text-xs line-clamp-3">
                        {genres.map((g) => g + ", ")}
                    </p>
                </div>
            </div>
        </li>
    );
}

function AnimeItemSmartPhone() {
    return (
        <div className="p-2 overflow-hidden rounded shadow-xl">
            <AnimeList />
        </div>
    );
}

// history
// const [topAiringAnime, setTopAiringAnime] = useState([]);
// const [isLoading, setIsLoading] = useState(false);

// useEffect(function () {
//     async function loadTopAiringAnime() {
//         setIsLoading(true);

//         try {
//             const res = await fetch(
//                 "https://api.consumet.org/anime/gogoanime/top-airing"
//             );
//             const data = await res.json();

//             console.log(data);
//             setTopAiringAnime(data.results);
//         } catch (error) {
//             console.error(error.message);
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     loadTopAiringAnime();
// }, []);

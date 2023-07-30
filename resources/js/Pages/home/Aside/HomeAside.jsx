import { useHome } from "@/contexts/HomeProvider";
import StreamAside from "./StreamAside";
import SpAnimeItem from "./SpAnimeItem";
import AnimeItem from "./AnimeItem";

export default function HomeAside() {
    const { currentLocalPage } = useHome();

    return (
        <aside
            id="default-sidebar"
            className="sm:w-60 pb-4 sm:pb-0 sm:h-[38rem] lg:h-[40rem] transition-transform   sm:translate-x-0 sm:block  bg-black w-full"
            aria-label="Sidebar"
        >
            {currentLocalPage === "stream" && <StreamAside />}

            {currentLocalPage === undefined ||
                (currentLocalPage === "home" && <AnimeList />)}
        </aside>
    );
}

function AnimeList() {
    const { topAiringAnime, handleChangeScreen, isLoadingRecentEp } = useHome();

    // for performance: use window width
    // for decrease unnecessary map looping
    const windowWidth = window.innerWidth;
    return windowWidth > 640 ? (
        <AnimeItem
            topAiringAnime={topAiringAnime}
            onHandleChangeScreen={handleChangeScreen}
        />
    ) : (
        <>
            <h2 className="px-4 text-left sm:hidden text-stone-50">
                Popular anime
            </h2>
            {/* Use isLoadingRecentEps here to displaying <Loading /> by <Application /> */}
            {!isLoadingRecentEp &&
                topAiringAnime.map((anime) => (
                    <SpAnimeItem
                        key={anime.id}
                        anime={anime}
                        onHandleChangeScreen={handleChangeScreen}
                    />
                ))}
        </>
    );
}

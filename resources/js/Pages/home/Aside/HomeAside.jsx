import { useHome } from "@/contexts/HomeProvider";
// import StreamAside from "../home/Aside/StreamAside";
// import SpAnimeItem from "../home/Aside/SpAnimeItem";
// import AnimeItem from "../home/Aside/AnimeItem";
import StreamAside from "./StreamAside";
import SpAnimeItem from "./SpAnimeItem";
import AnimeItem from "./AnimeItem";

export default function HomeAside() {
    const { currentLocalPage } = useHome();

    return (
        <aside
            id="default-sidebar"
            className="sm:w-60 pb-4 sm:pb-0 sm:h-[40rem] transition-transform  mt-12 sm:translate-x-0 sm:block sm:mt-0 bg-black w-full"
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

import { usePage } from "@inertiajs/react";

import FavAnimeItem from "./FavAnimeItem";

import styles from "./../home/Aside/HomeAside.module.css";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function FavoriteAside() {
    const { props } = usePage();
    const [favoriteAnimes, setFavoriteAnimes] = useState(props.favoriteAnimes);

    function removeFavorite(animeId) {
        axios
            .post("/favorite/deleteFavorite", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": document
                        .querySelector('meta[name="csrf-token"]')
                        .getAttribute("content"),
                },
                body: JSON.stringify({ id: animeId }),
            })
            .then((_) => {
                setFavoriteAnimes((animes) =>
                    animes.filter((anime) => anime.anime_id !== animeId)
                );
                toast.success("Removed successfully");
            })
            .catch((_) => toast.error("Something gone wrong :("));
    }

    return (
        <aside
            id="default-sidebar"
            className="w-full pb-4 mt-12 transition-transform bg-black sm:w-60 sm:pb-0 sm:h-app_window_height sm:translate-x-0 sm:block sm:mt-0"
            aria-label="Sidebar"
        >
            <div
                className={`h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black ${styles.scrollGotoLeft} -scroll relative`}
            >
                <h2 className="text-left text-stone-50">Favorite list</h2>
                <ul className={`space-y-2 font-medium ${styles.scrollDefault}`}>
                    {favoriteAnimes.map((anime) => (
                        <FavAnimeItem
                            key={anime.anime_id}
                            anime={anime}
                            onRemoveFavorite={removeFavorite}
                        />
                    ))}
                </ul>
            </div>
        </aside>
    );
}

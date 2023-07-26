import { toast } from "react-hot-toast";
import { FAVORITE, useFavorite } from "@/contexts/FavoriteProvider";

import FavAnimeItem from "./FavAnimeItem";
import styles from "./../home/Aside/HomeAside.module.css";

export default function FavoriteAside() {
    const { favoriteList, dispatch } = useFavorite();

    function removeFavorite(animeId) {
        axios
            .post("/favorite/deleteFavorite", {
                body: JSON.stringify({ id: animeId }),
            })
            .then((_) => {
                dispatch({
                    type: FAVORITE.SET_FAVORITE_LIST,
                    payload: animeId,
                });
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
                    {favoriteList.map((anime) => (
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

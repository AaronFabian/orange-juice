import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import { toast } from "react-hot-toast";

export default function ToggleFavoriteButton({
    animeId,
    title,
    image,
    season,
}) {
    const [toggleFavorite, setToggleFavorite] = useState(false);
    const [preventClick, setPreventClick] = useState(false);

    function handleAddToFavorite() {
        if (preventClick) return;
        setPreventClick(true);

        const favorite = {
            anime_id: animeId,
            title: title,
            poster: image,
            season: season,
            last_episode: "_",
        };

        // TODO: move this code to stream provider
        axios
            .post("favorite", { favorite })
            .then((_) => {
                if (toggleFavorite)
                    router.page.props.favoriteAnimes = [
                        ...router.page.props.favoriteAnimes.filter(
                            (fav) => fav.anime_id !== animeId
                        ),
                    ];
                else
                    router.page.props.favoriteAnimes = [
                        ...router.page.props.favoriteAnimes,
                        { anime_id: animeId },
                    ];

                toast(
                    toggleFavorite
                        ? "Removed from favorite."
                        : "Added to favorite."
                );
                setToggleFavorite(!toggleFavorite);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Something gone wrong :(");
            })
            .finally(() => setPreventClick(false));
    }

    useEffect(
        // Determining the button state at start
        function () {
            const isFavorited = router.page.props?.favoriteAnimes?.find(
                (fav) => fav.anime_id === animeId
            );
            if (isFavorited) setToggleFavorite(true);
        },
        []
    );

    return toggleFavorite ? (
        <button
            className="text-sm text-stone-400 hover:text-stone-50 active:text-gray-400"
            onClick={handleAddToFavorite}
            disabled={preventClick}
        >
            &#x2665; {preventClick ? "Adding..." : "Added to Favorite"}
        </button>
    ) : (
        <button
            className="text-sm text-stone-400 hover:text-stone-50 active:text-gray-400"
            onClick={handleAddToFavorite}
            disabled={preventClick}
        >
            &#x2661; {preventClick ? "Adding..." : "Add to Favorite !"}
        </button>
    );
}

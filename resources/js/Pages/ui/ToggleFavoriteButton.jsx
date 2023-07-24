import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function ToggleFavoriteButton({
    animeId,
    title,
    image,
    season,
}) {
    const [toggleFavorite, setToggleFavorite] = useState(false);

    function handleAddToFavorite() {
        const favorite = {
            anime_id: animeId,
            title: title,
            poster: image,
            season: season,
            last_episode: "",
        };

        axios
            .post("/favorite/addToFavorite", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": document
                        .querySelector('meta[name="csrf-token"]')
                        .getAttribute("content"),
                },
                body: JSON.stringify(favorite),
            })
            .then((_) => {
                setToggleFavorite((toogle) => {
                    // TODO:
                    if (toogle) {
                        router.page.props.favoriteAnimes = [
                            ...router.page.props.favoriteAnimes.filter(
                                (fav) => fav.anime_id !== animeId
                            ),
                        ];

                        toast("Removed from favorite.");
                    } else {
                        router.page.props.favoriteAnimes = [
                            ...router.page.props.favoriteAnimes,
                            { anime_id: animeId },
                        ];

                        toast("Added to favorite.");
                    }
                    return !toogle;
                });
            })
            .catch((err) => toast.error("Something gone wrong :("));
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
        >
            &#x2665; Added to Favorite
        </button>
    ) : (
        <button
            className="text-sm text-stone-400 hover:text-stone-50 active:text-gray-400"
            onClick={handleAddToFavorite}
        >
            &#x2661; Add to Favorite !
        </button>
    );
}

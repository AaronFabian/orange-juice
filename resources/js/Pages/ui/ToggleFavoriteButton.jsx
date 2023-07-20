import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import axios from "axios";

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
            .post("/addToFavorite", {
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
                    if (toogle) {
                        router.page.props.favoriteAnimes = [
                            ...router.page.props.favoriteAnimes.filter(
                                (fav) => fav.anime_id !== animeId
                            ),
                        ];
                    } else {
                        router.page.props.favoriteAnimes = [
                            ...router.page.props.favoriteAnimes,
                            { anime_id: animeId },
                        ];
                    }
                    return !toogle;
                });
            })
            .catch((err) => console.error(err));
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

{
    /* &#9733; Remove from favorite */
}
{
    /* &#9734; Add to Favorite */
}
{
    /* &#9733; Add to favorite */
}
{
    /* PiStarFill */
}
{
    /* PiStarThin */
}

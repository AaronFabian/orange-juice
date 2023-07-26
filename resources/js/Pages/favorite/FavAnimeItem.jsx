import { URL_ANIME_DETAIL, convertISODate } from "@/utils";
import { FAVORITE, useFavorite } from "@/contexts/FavoriteProvider";

export default function FavAnimeItem({ anime, onRemoveFavorite }) {
    const { dispatch, animeId: currentAnimeId } = useFavorite();
    const {
        title,
        poster: image,
        created_at: addedAt,
        anime_id: animeId,
    } = anime;
    const [month, day, year] = convertISODate(addedAt);

    async function hanldeOnClickAnime(e) {
        e.preventDefault();
        dispatch({ type: FAVORITE.START_WATCHING, payload: animeId });

        try {
            const { status, data } = await axios.get(
                // get all anime detail but just catch the episodes list
                `${URL_ANIME_DETAIL}/${animeId}`
            );
            if (status !== 200) throw new Error("Something gone wrong :(");

            dispatch({ type: FAVORITE.SET_EPISODE_LIST, payload: data });
        } catch (error) {
            // console.error(error);
            dispatch({ type: FAVORITE.SET_ERROR });
        }
    }

    return (
        <li className="relative" onClick={hanldeOnClickAnime} title={title}>
            <div
                className={`flex items-center p-2  rounded-lg cursor-pointer text-stone-50  hover:bg-gray-700 ${
                    animeId === currentAnimeId ? "bg-gray-700" : ""
                }`}
            >
                <img className="object-cover w-14" src={image} alt={title} />
                <div className="self-start ml-3 leading-tight ">
                    <p className="text-sm line-clamp-2 text-purple_mood">
                        {title}
                    </p>
                    <p className="mt-2 text-xs line-clamp-3 text-stone-50">
                        Added at <br />
                        {day.replace(",", "")} - {month} - {year}
                    </p>
                </div>
            </div>

            {/* remove anime from favorite */}
            <button
                className="absolute top-0 right-0 px-1.5 duration-300 opacity-50 rounded-full text-stone-50 hover:bg-red-300 pb-0.5 active:bg-red-400 hover:opacity-100 hover:text-stone-950 text-xs"
                onClick={(e) => {
                    e.stopPropagation();
                    onRemoveFavorite(animeId);
                }}
            >
                x
            </button>
        </li>
    );
}

import { RxCross2 } from "react-icons/rx";

import { convertISODate } from "@/utils";

export default function FavAnimeItem({ anime, onRemoveFavorite }) {
    const {
        title,
        poster: image,
        created_at: addedAt,
        anime_id: animeId,
    } = anime;
    const [month, day, year] = convertISODate(addedAt);

    return (
        <li className="relative" onClick={() => {}} title={title}>
            <div
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
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
                onClick={() => onRemoveFavorite(animeId)}
            >
                x
            </button>
        </li>
    );
}

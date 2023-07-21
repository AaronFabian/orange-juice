import { useHome } from "@/contexts/HomeProvider";
import styles from "../../partials/Aside.module.css";

export default function AnimeItem({ topAiringAnime, handleChangeScreen }) {
    return (
        <div
            className={`h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black ${styles.scrollGotoLeft} -scroll relative`}
        >
            <h2 className="text-left text-stone-50">Popular anime</h2>
            <ul className={`space-y-2 font-medium ${styles.scrollDefault}`}>
                {topAiringAnime.map((anime) => (
                    <Anime
                        key={anime.id}
                        anime={anime}
                        onHandleChangeScreen={handleChangeScreen}
                    />
                ))}
            </ul>
        </div>
    );
}

function Anime({ anime, onHandleChangeScreen }) {
    const { id, title, genres, image, url } = anime;

    return (
        <li onClick={() => onHandleChangeScreen("stream", id)} title={title}>
            <div
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                <img className="h-16 w-14" src={image} alt={title} />
                <div className="self-start ml-3 leading-tight ">
                    <p className="text-sm line-clamp-2 text-purple_mood">
                        {title}
                    </p>
                    <p className="text-xs line-clamp-3">{genres.join(", ")}</p>
                </div>
            </div>
        </li>
    );
}

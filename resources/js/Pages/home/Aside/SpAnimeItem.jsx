export default function SpAnimeItem({ anime, onHandleChangeScreen }) {
    const { id, title, image, genres } = anime;

    return (
        <div
            onClick={() => onHandleChangeScreen("stream", id)}
            className="grid h-32 grid-cols-[120px_1fr] px-4 py-3 overflow-hidden rounded shadow-xl sm:hidden gap-4"
            key={title}
        >
            <img
                className="block object-cover w-full mx-auto h-28"
                src={image}
                alt="Sunset in the mountains"
            />
            <div>
                <p className="mb-2 text-sm text-stone-50 line-clamp-2">
                    {title}
                </p>
                <div className="">
                    {genres.map((a) => (
                        <span
                            className="inline-block px-1 py-0.5 mb-1 mr-2 text-[8px] font-semibold text-stone-950 bg-gray-200 rounded-full"
                            key={a}
                        >
                            {a}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

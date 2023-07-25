import { useStream } from "@/contexts/StreamProvider";
import { useState } from "react";

export default function CommentSection() {
    const [toggleOpen, setToggleOpen] = useState(false);

    const { animeId, episodeId, animeEpisodeData } = useStream();

    if (!toggleOpen)
        return (
            <button
                onClick={() => setToggleOpen(true)}
                className="block px-3 py-1 mx-auto mt-4 text-sm tracking-wide border rounded-full text-stone-50 border-stone-400 hover:text-stone-400 active:text-stone-50"
            >
                Open Comment
            </button>
        );

    const { title } = animeEpisodeData;
    return (
        <div className="mt-4">
            <button
                onClick={() => setToggleOpen(false)}
                className="block px-3 py-1 mx-auto text-sm tracking-wide border rounded-full text-stone-50 border-stone-400 hover:text-stone-400 active:text-stone-50"
            >
                Close Comment
            </button>
            <h3 className="mt-6 text-center border-t border-t-stone-400 text-stone-50">
                Total: 32
            </h3>
        </div>
    );
}

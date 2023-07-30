import { useState } from "react";

import Comment from "./Comment";
import CommentPaginator from "./CommentPaginator";
import CommentForm from "./CommentForm";
import CommentColumn from "./CommentColumn";

export default function CommentSection() {
    const [toggleOpen, setToggleOpen] = useState(false);
    const [commentCache, setCommentCache] = useState(null);

    if (!toggleOpen)
        return (
            <button
                onClick={() => setToggleOpen(true)}
                className="block px-3 py-1 mx-auto mt-4 text-sm tracking-wide border rounded-full text-stone-50 border-stone-400 hover:text-stone-400 active:text-stone-50"
            >
                Open Comment
            </button>
        );

    return (
        <div className="px-2 mt-4">
            <button
                onClick={() => setToggleOpen(false)}
                className="block px-3 py-1 mx-auto text-sm tracking-wide border rounded-full text-stone-50 border-stone-400 hover:text-stone-400 active:text-stone-50"
            >
                Close Comment
            </button>

            <CommentColumn
                commentCache={commentCache}
                onSetCommentCache={setCommentCache}
            />
        </div>
    );
}

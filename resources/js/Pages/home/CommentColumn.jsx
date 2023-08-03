import { useEffect, useState } from "react";
import { useStream } from "@/contexts/StreamProvider";

import Comment from "./Comment";
import CommentForm from "./CommentForm";
import CommentPaginator from "./CommentPaginator";
import { toast } from "react-hot-toast";
import { router } from "@inertiajs/react";

export default function CommentColumn({ commentCache, onSetCommentCache }) {
    const { animeId, episodeId } = useStream();
    const [page, setPage] = useState(null);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    async function handleGetComments(gotoPage) {
        try {
            const { status, data } = await axios.get(
                `/comment/${animeId}/${episodeId}?page=${gotoPage ?? 1}`
            );
            if (status !== 200 || typeof data === "string")
                throw new Error("Something gone wrong :(");

            const {
                data: commentsList,
                current_page: curPage,
                next_page_url: nextUrl,
                prev_page_url: prevUrl,
                total,
            } = data.data;

            setComments(commentsList);
            onSetCommentCache({
                page: curPage ?? 1,
                nextPageUrl: nextUrl,
                prevPageUrl: prevUrl,
                comments: commentsList ?? [],
                total,
            });
            setPage(curPage);
            setIsLoading(false);
        } catch (error) {
            const { response } = error;
            if (response.status === 401) {
                toast((t) => (
                    <span>
                        You are not logged in. Login now .😉
                        <button
                            className="bg-purple_mood"
                            onClick={() => {
                                toast.dismiss(t.id);
                                router("/login");
                            }}
                        >
                            Login
                        </button>
                    </span>
                ));

                setIsError(true);
                return;
            }

            setIsError(true);
            toast.error("Something gone wrong 😵");
            router.visit("/");
        }
    }

    useEffect(function () {
        if (commentCache) {
            const { page: cachedPage, comments: cachedComments } = commentCache;
            setPage(cachedPage);
            setComments(cachedComments);
        } else {
            setIsLoading(true);
            handleGetComments();
        }
    }, []);

    if (isLoading || !commentCache)
        return (
            <h1 className="text-center text-md text-stone-400">Loading...</h1>
        );

    if (isError)
        return (
            <h1 className="text-center text-md text-stone-400">
                Uh oh something gone wrong... 😵
            </h1>
        );

    const totalComments = commentCache.total;
    return (
        <>
            <h3 className="mt-4 text-center text-stone-50">
                Total: {totalComments}
            </h3>

            <CommentForm onHandleGetComments={handleGetComments} />

            <div className="mt-4">
                {comments.length ? (
                    <>
                        {comments.map((comment) => (
                            <Comment comment={comment} key={comment.id} />
                        ))}
                        <CommentPaginator
                            commentCache={commentCache}
                            onHandleGetComments={handleGetComments}
                            page={page}
                        />
                    </>
                ) : (
                    <h1 className="text-sm text-center text-stone-400">
                        Looks like there are no comment yet. Be the first
                        comment here.
                    </h1>
                )}
            </div>
        </>
    );
}

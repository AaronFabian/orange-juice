import ButtonText from "../ui/ButtonBack";

export default function CommentPaginator({
    commentCache,
    onHandleGetComments,
}) {
    const { nextPageUrl, prevPageUrl, page } = commentCache;

    return (
        <div className="flex justify-between">
            <div className="w-16">
                {prevPageUrl && (
                    <ButtonText onClick={() => onHandleGetComments(page - 1)}>
                        &#x3c;&nbsp;Previous
                    </ButtonText>
                )}
            </div>
            <div className="">
                <p className="text-stone-400">
                    {nextPageUrl ? "page " + page : "End of comment"}
                </p>
            </div>
            <div className="w-16">
                {nextPageUrl && (
                    <ButtonText onClick={() => onHandleGetComments(page + 1)}>
                        Next&nbsp;&#x3e;
                    </ButtonText>
                )}
            </div>
        </div>
    );
}

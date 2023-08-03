import { IconContext } from "react-icons";
import { BsSend } from "react-icons/bs";

import { useStream } from "@/contexts/StreamProvider";
import Input from "../ui/Input";

import styles from "../ui/HomeHeader.module.css";
import { router, useForm } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import { useState } from "react";

export default function CommentForm({ onHandleGetComments }) {
    const { data, setData, reset } = useForm({
        comment: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const { animeId, episodeId } = useStream();

    function onSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        axios
            .post("/comment", {
                ...data,
                anime_id: animeId,
                episode_id: episodeId,
            })
            .then((res) => {
                // console.log(res);
                toast("Comment sent !", { icon: "😉" });
                reset("comment");
                setErrors({});
                onHandleGetComments();
            })
            .catch(({ response }) => {
                if (response.status === 401) {
                    toast((t) => (
                        <span>
                            You are not logged in. Login now
                            <button
                                className="px-2 py-1 ml-2 rounded-md text-stone-50 bg-purple_mood hover:bg-purple_mood_hard hover:text-stone-950"
                                onClick={() => {
                                    toast.dismiss(t.id);
                                    router.visit("/login");
                                }}
                            >
                                Login
                            </button>
                        </span>
                    ));

                    return;
                }

                setErrors({ comment: response.data.message });
                toast.error("Something gone wrong while sending the comment.");
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <form action="" onSubmit={onSubmit} className="flex justify-between">
            <div className="basis-11/12">
                <Input
                    name="comment"
                    label="Enter comment"
                    margin="mt-2"
                    border="border-stone-50"
                    value={data.comment}
                    setValue={(val) => setData("comment", val)}
                    disabled={isLoading}
                />
                {errors?.comment && (
                    <small className="text-xs text-red-300">
                        {errors.comment}
                    </small>
                )}
            </div>
            <div className="self-center pr-2">
                <IconContext.Provider
                    value={{
                        className: `stroke-purple_mood_hard ${styles["svg path"]} fill-purple_mood scale-125 `,
                    }}
                >
                    <button type="sumbit" disabled={isLoading}>
                        <BsSend />
                    </button>
                </IconContext.Provider>
            </div>
        </form>
    );
}

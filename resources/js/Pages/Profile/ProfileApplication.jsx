import { router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ProfileApplication() {
    const {
        props: { auth },
    } = usePage();
    const { data, setData, errors, setError, clearErrors } = useForm({
        name: auth.user.name,
        password: "",
    });
    const [allowSubmit, setAllowSubmit] = useState(true);

    function onSubmit(e) {
        e.preventDefault();
        if (!allowSubmit) return;
        setAllowSubmit(false);

        clearErrors();
        axios
            .patch("/profile", data)
            .then(({ data }) => {
                toast.success(data.message);
                setData("password", "");
                router.reload();
            })
            .catch(({ response }) => {
                switch (response.status) {
                    case 400:
                        toast.error(response.data.message);
                        break;

                    case 422:
                        const fieldError = response.data.errors;
                        // get arr here
                        if (fieldError?.password)
                            setError("password", fieldError.password[0]);

                        if (fieldError?.name)
                            setError("name", fieldError.name[0]);

                        toast.error("Please check form requirements.");
                        break;

                    default:
                        throw new Error("Unexpected behaviour.");
                }
            })
            .finally(() => setAllowSubmit(true));
    }

    return (
        <>
            <form
                onSubmit={onSubmit}
                className="absolute flex flex-col items-center px-8 pt-6 pb-8 mb-4 -translate-x-1/2 -translate-y-1/2 rounded shadow-md top-1/2 left-1/2 bg-stone-950 w-96"
            >
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="text-3xl font-medium text-gray-600 dark:text-gray-300">
                        JL
                    </span>
                </div>

                <div className="self-stretch mb-4">
                    <label
                        className="block mb-2 text-sm font-bold text-purple_mood"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        defaultValue={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors?.name || errors.name !== null ? (
                        <p className="text-xs italic text-red-500">
                            {errors.name}
                        </p>
                    ) : null}
                </div>

                <div className="self-stretch mb-4">
                    <label
                        className="block mb-2 text-sm font-bold text-purple_mood"
                        htmlFor="password"
                    >
                        Confirm password
                    </label>
                    <input
                        className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        value={data.password}
                        placeholder="input password to confirm edit"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />
                    {errors?.password || errors.password !== null ? (
                        <p className="text-xs italic text-red-500">
                            {errors.password}
                        </p>
                    ) : null}
                </div>

                <div className="flex items-center self-stretch justify-between mt-2">
                    <button
                        className={`px-4 py-2 font-bold rounded bg-purple_mood hover:bg-purple_mood_hard text-stone-950 focus:outline-none focus:shadow-outline disabled:cursor-wait`}
                        type="submit"
                        disabled={!allowSubmit}
                    >
                        {allowSubmit ? "Edit !" : "Sending..."}
                    </button>
                </div>
            </form>
        </>
    );
}

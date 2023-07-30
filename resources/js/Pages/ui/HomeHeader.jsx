import { useState } from "react";
import { IconContext } from "react-icons";
import { GrSearch, GrFormClock } from "react-icons/gr";
import { useHome } from "@/contexts/HomeProvider";
import styles from "./HomeHeader.module.css";

export default function HomeHeader() {
    const [input, setInput] = useState("");
    const { handleSearchAnime, isSearchLoading } = useHome();

    function onSubmit(e) {
        e.preventDefault();
        if (!input) return;

        handleSearchAnime(input);
    }

    return (
        <>
            <header
                className={`relative w-full pt-2 duration-150  bg-black h-14 sm:border-t sm:border-l sm:border-r border-white overflow-hidden sm:rounded-t-md`}
            >
                <form action="" onSubmit={onSubmit} className="relative">
                    <input
                        type="text"
                        className="block w-11/12 h-10 px-5 py-3 mx-auto text-sm border-gray-200 rounded-full bg-stone-50 focus:border-blue-500 focus:ring-blue-500 disabled:bg-stone-300"
                        placeholder={"Search your favorite anime..."}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={isSearchLoading}
                        value={
                            isSearchLoading ? "Searching for " + input : input
                        }
                    />
                    <button
                        className="absolute px-[6px] py-1 border border-purple_mood text-red-500 bg-white rounded-full -translate-x-1/2 sm:-translate-x-full top-2 right-2 cursor-pointer"
                        type="submit"
                        value={input}
                    >
                        <IconContext.Provider
                            value={{
                                className: `stroke-purple_mood_hard ${styles["svg path"]} fill-purple_mood`,
                            }}
                        >
                            {isSearchLoading ? <GrFormClock /> : <GrSearch />}
                        </IconContext.Provider>
                    </button>
                </form>
            </header>
        </>
    );
}

import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function LoginPage() {
    const [logOrReg, setLogOrReg] = useState("login");

    return (
        <>
            <main className="grid grid-rows-2 rounded-md sm:grid-rows-none grid-rows sm:grid-cols-2 bg-stone-950 sm:h-app_height">
                <div>
                    <img
                        src="img/login.png"
                        alt="Login image"
                        className="w-full h-full align-middle"
                    />
                </div>

                <div className="flex justify-center">
                    <div className="m-auto w-72">
                        <h1 className="from-[#C991E9] to-[#D38AA8] text-transparent bg-clip-text bg-gradient-to-r text-5xl font-semibold">
                            おかえり
                        </h1>
                        <p className="text-2xl tracking-widest text-stone-50">
                            WELCOME BACK
                        </p>

                        <div class="relative z-0 w-full mb-6 group mt-8">
                            <input
                                type="email"
                                name="username_input"
                                id="username_input"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple_mood focus:outline-none focus:ring-0 focus:border-purple_mood peer"
                                placeholder=" "
                                required
                            />
                            <label
                                for="username_input"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple_mood_hard peer-focus:dark:text-purpleborder-purple_mood peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Username
                            </label>
                        </div>

                        <div class="relative z-0 w-full mb-6 group">
                            <input
                                type="email"
                                name="password_input"
                                id="password_input"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple_mood focus:outline-none focus:ring-0 focus:border-hardtext-purple_mood_hard peer"
                                placeholder=" "
                                required
                            />
                            <label
                                for="password_input"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple_mood_hard peer-focus:dark:text-purpleborder-purple_mood peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Password
                            </label>

                            <div className="flex items-center justify-end gap-2 py-6 me-auto">
                                <input
                                    type="checkbox"
                                    className="accent-purple_mood checked:accent-purple_mood"
                                    id="remember_me_checkbox"
                                />
                                <label
                                    className="text-stone-500"
                                    htmlFor="remember_me_checkbox"
                                >
                                    Remember Me
                                </label>
                            </div>

                            <button className="w-full h-10 text-xl font-bold from-[#C991E9] to-[#D38AA8] bg-gradient-to-r">
                                SIGN IN
                            </button>

                            <div className="mt-20">
                                <Link
                                    href="/"
                                    className="duration-150 text-stone-500 hover:text-purple_mood"
                                >
                                    &larr; Go back home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

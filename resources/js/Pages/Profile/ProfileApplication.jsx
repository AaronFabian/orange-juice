export default function ProfileApplication() {
    return (
        <div class="w-full max-w-xs">
            <form class="bg-stone-950 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
                <div class="relative inline-flex items-center justify-center w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mb-4">
                    <span class="font-medium text-3xl text-gray-600 dark:text-gray-300">
                        JL
                    </span>
                </div>

                <div class="mb-4 self-stretch">
                    <label
                        class="block text-purple_mood text-sm font-bold mb-2"
                        for="username"
                    >
                        Username
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                    />
                </div>

                <div class="mb-4 self-stretch">
                    <label
                        class="block text-purple_mood text-sm font-bold mb-2"
                        for="password"
                    >
                        Password
                    </label>
                    <input
                        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                    />
                    <p class="text-red-500 text-xs italic">
                        Please choose a password.
                    </p>
                </div>

                <div class="flex items-center justify-between mt-2 self-stretch">
                    <button
                        class="inline-block align-baseline font-bold text-sm text-purple_mood_hard hover:text-purple_mood_slow"
                        href="#"
                    >
                        Reset
                    </button>
                    <button
                        class="bg-purple_mood hover:bg-purple_mood_hard text-stone-950 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Edit !
                    </button>
                </div>
            </form>
        </div>
    );
}

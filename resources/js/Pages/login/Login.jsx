import { Link } from "@inertiajs/react";
import ButtonOnSubmit from "../ui/ButtonOnSubmit";
import Checkbox from "../ui/Checkbox";
import Input from "../ui/Input";

export default function LoginPage() {
    return (
        <form action="">
            <main className="grid grid-rows-2 rounded-md sm:grid-rows-none grid-rows sm:grid-cols-2 bg-stone-950 sm:h-app_height">
                <div className="overflow-hidden">
                    <img
                        src="img/login.png"
                        alt="Login image"
                        className="object-cover object-center h-full align-middle"
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
                            <Input
                                type="email"
                                name="email"
                                label="Email"
                                autoFocus={true}
                            />
                        </div>

                        <div class="relative z-0 w-full mb-6 group">
                            <Input
                                type="password"
                                name="password"
                                label="Password"
                            />

                            <Checkbox text="Remember me" />

                            <ButtonOnSubmit>SIGN IN</ButtonOnSubmit>

                            <Link
                                href="/register"
                                className="block mx-auto mt-3 text-sm text-center align-middle text-stone-500 hover:text-purple_mood"
                            >
                                Don't have an account ? Click here.
                            </Link>

                            <Link
                                href="/"
                                className="block mt-20 duration-150 text-stone-500 hover:text-purple_mood"
                            >
                                &larr; Go back home
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </form>
    );
}

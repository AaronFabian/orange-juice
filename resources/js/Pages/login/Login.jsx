import { Link, router, useForm } from "@inertiajs/react";
import ButtonOnSubmit from "../ui/ButtonOnSubmit";
import Checkbox from "../ui/Checkbox";
import Input from "../ui/Input";
import { toast } from "react-hot-toast";

export default function LoginPage() {
    const { data, setData, errors, setError } = useForm({
        email: "",
        password: "",
    });

    function submit(e) {
        e.preventDefault();

        router.post(
            "/login",
            {
                ...data,
                _token: router.page.props.csrf_token,
            },
            {
                onError: (e) => {
                    setError("email", e.email);
                    toast.error(e.email);
                },
            }
        );
    }

    return (
        <form action="" onSubmit={submit}>
            <main className="grid h-screen grid-rows-2 pt-16 sm:pt-0 sm:rounded-md sm:grid-rows-none grid-rows sm:grid-cols-2 bg-stone-950 sm:h-app_height">
                <div className="hidden overflow-hidden sm:block rounded-l-md">
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

                        <div className="relative z-0 w-full mt-8 mb-6 group">
                            <Input
                                type="email"
                                name="email"
                                label="Email"
                                border={errors.email ? "border-red-500" : null}
                                focusBorderColor={
                                    errors.email
                                        ? "focus:border-red-500"
                                        : "focus:border-purple_mood"
                                }
                                autoFocus={true}
                                setValue={(val) => setData("email", val)}
                            />
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <Input
                                type="password"
                                name="password"
                                label="Password"
                                border={errors.email ? "border-red-500" : null}
                                focusBorderColor={
                                    errors.email
                                        ? "focus:border-red-500"
                                        : "focus:border-purple_mood"
                                }
                                setValue={(val) => setData("password", val)}
                            />

                            {/* <Checkbox text="Remember me" /> */}

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

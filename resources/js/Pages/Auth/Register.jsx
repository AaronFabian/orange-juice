import { Head, Link, router, useForm } from "@inertiajs/react";

import WindowLayout from "../partials/WindowLayout";
import Section from "../partials/Section";
import Input from "../ui/Input";
import Checkbox from "../ui/Checkbox";
import ButtonOnSubmit from "../ui/ButtonOnSubmit";
import { toast } from "react-hot-toast";

export default function Register() {
    const { data, setData } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        // post(route("register"));
        router.post(
            "/register",
            {
                ...data,
                _token: router.page.props.csrf_token,
            },
            {
                onError: () => {
                    toast.error("Please confirm the form field.");
                },
            }
        );
    };

    const errors = router.page?.props?.errors;

    return (
        <WindowLayout>
            <Head title="Register" />
            <Section>
                <div className="relative w-full h-screen sm:h-app_height sm:rounded-md bg-stone-950/70">
                    <form action="" onSubmit={submit}>
                        <img
                            src="/img/register-bg.jpg"
                            alt="oshi no ko background"
                            className="absolute top-0 left-0 object-cover h-full -z-10 blur-sm"
                        />
                        <h1 className="from-[#C991E9] to-[#D38AA8] text-transparent bg-clip-text bg-gradient-to-r text-5xl font-semibold text-center pt-6 sm:pt-0 sm:mt-8">
                            登録
                        </h1>
                        <h2 className="text-xl tracking-widest text-center sm:text-2xl text-stone-50">
                            Register
                        </h2>
                        <div className="absolute z-10 w-11/12 sm:w-1/2 mx-auto -translate-x-1/2 -translate-y-1/2 border rounded-md h-[30rem] top-1/2 left-1/2 border-stone-50/50 group focus:border-purple_mood mt-4 sm:mt-0">
                            <div className="w-11/12 mx-auto sm:w-4/5 ">
                                <Input
                                    type="text"
                                    name="name"
                                    label="Username"
                                    autoFocus={true}
                                    setValue={(val) => setData("name", val)}
                                    margin="mt-5 mb-2.5"
                                />
                                {errors?.name && (
                                    <p className="text-xs italic text-red-400/80">
                                        {errors?.name}
                                    </p>
                                )}
                                <Input
                                    type="email"
                                    name="user_email"
                                    label="Email"
                                    margin="mt-5 mb-2.5"
                                    setValue={(val) => setData("email", val)}
                                />
                                {errors?.email && (
                                    <p className="text-xs italic text-red-400/80">
                                        {errors?.email}
                                    </p>
                                )}
                                <Input
                                    type="password"
                                    name="password"
                                    label="Password"
                                    margin="mt-5 mb-2.5"
                                    setValue={(val) => setData("password", val)}
                                />
                                {errors?.password && (
                                    <p className="text-xs italic text-red-400/80">
                                        {errors?.password}
                                    </p>
                                )}
                                <Input
                                    type="password"
                                    name="password_confirmation"
                                    label="Re-confirmed password"
                                    setValue={(val) =>
                                        setData("password_confirmation", val)
                                    }
                                />

                                <Checkbox
                                    text="Policy & Agreement"
                                    padding="pt-2 pb-6"
                                />

                                <ButtonOnSubmit>Register</ButtonOnSubmit>

                                <Link
                                    href="/login"
                                    className="block mx-auto mt-5 text-center duration-150 text-stone-500 hover:text-stone-50 sm:text-sm"
                                >
                                    Already have an account ? Login here.
                                </Link>
                            </div>
                        </div>

                        <div className="absolute -translate-x-1/2 bottom-2 left-1/2">
                            <Link
                                href="/"
                                className="duration-150 text-stone-500 hover:text-purple_mood"
                            >
                                &larr; Go back home
                            </Link>
                        </div>
                    </form>
                </div>
            </Section>
            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="block w-full mt-1"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full mt-1"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full mt-1"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="block w-full mt-1"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form> */}
        </WindowLayout>
    );
}

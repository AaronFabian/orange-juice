import { Link } from "@inertiajs/react";
import Navbar from "./partials/Navbar";
import Section from "./partials/Section";
import WindowLayout from "./partials/WindowLayout";

export default function NotFound({ text, def }) {
    if (def) {
        return (
            <div className="relative flex flex-col items-center justify-center w-full h-screen sm:h-app_window_height sm:rounded-b-md bg-application_layout_color">
                <h1 className="text-5xl text-stone-50">
                    {text ?? "Page not found 🥹"}
                </h1>
                <Link
                    href="/"
                    className="block mt-4 duration-150 text-stone-950 hover:text-purple_mood"
                >
                    &larr; Go back home
                </Link>
            </div>
        );
    }

    return (
        <WindowLayout>
            <Navbar />
            <Section>
                <div className="relative flex flex-col items-center justify-center w-full h-screen sm:h-app_window_height sm:rounded-b-md bg-application_layout_color">
                    <h1 className="text-5xl text-stone-50">
                        {text ?? "Page not found 🥹"}
                    </h1>
                    <Link
                        href="/"
                        className="block mt-4 duration-150 text-stone-950 hover:text-purple_mood"
                    >
                        &larr; Go back home
                    </Link>
                </div>
            </Section>
        </WindowLayout>
    );
}

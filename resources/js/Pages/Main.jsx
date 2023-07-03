import NavLink from "@/Components/NavLink";
import { Link, Head, router } from "@inertiajs/react";

import Navbar from "./partials/Navbar";
import WindowLayout from "./partials/WindowLayout";
import Aside from "./components/Aside";
import Section from "./partials/Section";
import Application from "./components/Application";

export default function Main(props) {
    console.clear();

    return (
        <>
            <Head title="Home - Orange Juice" />
            <WindowLayout>
                <Navbar />
                <Section>
                    <Aside />
                    <Application />
                </Section>
            </WindowLayout>
        </>
    );
}

// {
//     /* <Head title="Home - Orange juice" />
//             <h1 className="text-cyan-800">Hello from react </h1>
//             <iframe
//                 title="Video stream"
//                 src="https://anihdplay.com/streaming.php?id=MjAyNjQ3&title=%22Oshi+no+Ko%22+Episode+1&typesub=SUB"
//                 width={1280}
//                 height={720}
//             ></iframe>
//             <Link href="home">Go to next page</Link> */
// }

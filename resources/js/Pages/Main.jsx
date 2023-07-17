import { Head } from "@inertiajs/react";

import WindowLayout from "./partials/WindowLayout";
import Login from "./login/Login";
import Home from "./home/Home";
import NotFound from "./NotFound";
import Edit from "./profile/Edit";
import Explore from "./explore/Explore";
import { useState } from "react";
import { StreamProvider } from "@/contexts/StreamProvider";

export default function Main(props) {
    console.clear();

    const title = props.title;

    let currentPage = null;
    switch (props.title) {
        case "Home":
            currentPage = (
                <StreamProvider>
                    <Home />
                </StreamProvider>
            );
            break;

        case "Login":
            currentPage = <Login />;
            break;

        case "Explore":
            currentPage = <Explore />;
            break;

        case "Profile":
            currentPage = <Edit />;
            break;

        default:
            currentPage = <NotFound />;
            break;
    }

    return (
        <>
            <Head title={`${title} - Orange Juice`} />
            <WindowLayout>{currentPage}</WindowLayout>
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

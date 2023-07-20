import { Head, usePage } from "@inertiajs/react";
import { HomeProvider } from "@/contexts/HomeProvider";
import { Toaster, toast } from "react-hot-toast";

import WindowLayout from "./partials/WindowLayout";
import Login from "./login/Login";
import Home from "./home/Home";
import NotFound from "./NotFound";
import Edit from "./profile/Edit";
import Explore from "./explore/Explore";

import "./main.css";
import { useEffect } from "react";
import History from "./history/History";
import Community from "./community/Community";
import Favorite from "./favorite/Favorite";

export default function Main(props) {
    console.clear();
    const title = props.title;

    let currentPage = null;
    switch (props.title) {
        case "Home":
            currentPage = (
                <HomeProvider>
                    <Home props={props} />
                </HomeProvider>
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

        case "History":
            currentPage = <History />;
            break;

        case "Community":
            currentPage = <Community />;

        case "Favorite":
            currentPage = <Favorite />;
            break;

        default:
            currentPage = <NotFound />;
            break;
    }

    // only for showing message by laravel
    useEffect(
        function () {
            if (props.flash.message) {
                toast.success(props.flash.message);
            }
        },
        [props.flash.message]
    );

    return (
        <>
            <Head title={`${title} - Orange Juice`} />
            <WindowLayout>{currentPage}</WindowLayout>
            <Toaster
                position="top-right"
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                    success: {
                        duration: 5000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                    },
                }}
            />
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

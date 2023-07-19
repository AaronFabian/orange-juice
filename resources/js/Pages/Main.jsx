import { Head, usePage } from "@inertiajs/react";
import { HomeProvider } from "@/contexts/HomeProvider";
import { Toaster } from "react-hot-toast";

import WindowLayout from "./partials/WindowLayout";
import Login from "./login/Login";
import Home from "./home/Home";
import NotFound from "./NotFound";
import Edit from "./profile/Edit";
import Explore from "./explore/Explore";

import "./main.css";

export default function Main(props) {
    console.clear();
    const title = props.title;

    let currentPage = null;
    switch (props.title) {
        case "Home":
            currentPage = (
                <HomeProvider>
                    <Home />
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

        default:
            currentPage = <NotFound />;
            break;
    }

    return (
        <>
            <Head title={`${title} - Orange Juice`} />
            <WindowLayout>{currentPage}</WindowLayout>
            <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroundColor: "var(--color-grey-0)",
                        color: "var(--color-grey-700)",
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

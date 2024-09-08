import { lazy, useEffect } from "react";
import { Head } from "@inertiajs/react";
import { Toaster, toast } from "react-hot-toast";
import { HomeProvider } from "@/contexts/HomeProvider";

import WindowLayout from "./partials/WindowLayout";
// import Login from "./login/Login";
// import Home from "./home/Home";
// import Community from "./community/Community";
// import History from "./history/History";
// import Edit from "./profile/Edit";
// import Favorite from "./favorite/Favorite";
// import NotFound from "./NotFound";

// PATH
const Home = lazy(() => import("./home/Home"));
const Login = lazy(() => import("./login/Login"));
const Community = lazy(() => import("./community/Community"));
const History = lazy(() => import("./history/History"));
const Edit = lazy(() => import("./profile/Edit.jsx"));
const Favorite = lazy(() => import("./favorite/Favorite"));
const NotFound = lazy(() => import("./NotFound"));
const Register = lazy(() => import("./Auth/Register.jsx"));

import "./main.css";

export default function Main(props) {
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

        case "Register":
            currentPage = <Register />;
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

    const userWidthSceen = window.innerWidth;

    return (
        <>
            <Head title={`${title} - Orange Juice`} />
            <WindowLayout>{currentPage}</WindowLayout>
            <Toaster
                position={userWidthSceen > 640 ? "top-right" : "top-center"}
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 3000,
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

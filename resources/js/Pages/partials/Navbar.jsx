import { memo, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { IconContext } from "react-icons";
import {
    PiHeartStraightLight,
    PiTelevisionLight,
    PiPersonArmsSpreadThin,
    PiDoorOpenLight,
    PiLinuxLogoLight,
    PiSignOutLight,
    PiNotePencilLight,
} from "react-icons/pi";

import NavLink from "@/Components/NavLink";
import styles from "../ui/HomeHeader.module.css";

function Navbar() {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const {
        props: { auth },
    } = usePage();

    function handleOpenDrawer(e) {
        e.preventDefault();
        setIsOpenDrawer((isOpen) => !isOpen);
    }

    return (
        <>
            <IconContext.Provider
                value={{
                    className: `stroke-purple_mood_hard ${styles["svg path"]} fill-purple_mood scale-125 `,
                }}
            >
                <nav className="fixed top-0 left-0 right-0 z-50 pt-2 pb-2 mx-auto bg-black sm:py-2 sm:static sm:rounded-tr-md sm:rounded-tl-md">
                    {/* In desktop always shown the NavLinkIcon, but hidden in smartphone */}
                    <ul className="items-center m-auto sm:h-8 w-app_inner_width sm:flex">
                        <UserProfile
                            isOpenDrawer={isOpenDrawer}
                            onOpenDrawer={handleOpenDrawer}
                            auth={auth}
                        />

                        {auth.user && (
                            <>
                                {/* <NavLinkIcon
                                    href="/history"
                                    icon={<PiTelevisionLight />}
                                >
                                    History
                                </NavLinkIcon> */}
                                <NavLinkIcon
                                    href="/favorite"
                                    icon={<PiHeartStraightLight />}
                                >
                                    Favorite
                                </NavLinkIcon>
                                {/* <NavLinkIcon
                                    href="/community"
                                    icon={<PiPersonArmsSpreadThin />}
                                >
                                    Community
                                </NavLinkIcon> */}
                            </>
                        )}

                        {auth.user ? (
                            <NavLinkIcon
                                href="/logout"
                                isSelfToRight={true}
                                icon={<PiSignOutLight />}
                            >
                                Logout
                            </NavLinkIcon>
                        ) : (
                            <div className="flex ms-auto">
                                {/* <NavLinkIcon
                                    href="/"
                                    icon={<PiPersonArmsSpreadThin />}
                                >
                                    Community
                                </NavLinkIcon> */}
                                {/* <NavLinkIcon
                                    href="/history"
                                    icon={<PiTelevisionLight />}
                                >
                                    History
                                </NavLinkIcon> */}
                                <NavLinkIcon
                                    href="/register"
                                    icon={<PiNotePencilLight />}
                                >
                                    Register
                                </NavLinkIcon>
                                <NavLinkIcon
                                    href="/login"
                                    icon={<PiDoorOpenLight />}
                                >
                                    Login
                                </NavLinkIcon>
                            </div>
                        )}
                    </ul>

                    {/* SmartphoneDrawer shown conditionally with boolean, keep state and hidden in desktop */}
                    {/* SmartPhoneDrawer includes the navbar button */}
                    {isOpenDrawer && <SmartPhoneDrawer auth={auth} />}
                </nav>
                {/* DesktopDrawer always shown but hidden in smartphone */}
                <DesktopDrawer />
            </IconContext.Provider>
        </>
    );
}

// Local component for Navbar
function DesktopDrawer() {
    return (
        <div className="hidden sm:block bg-gradient-to-r from-[#C991E9] to-[#F4BEA7] sm:h-10 lg:h-12  mx-auto ">
            <ul className="flex justify-center gap-32 px-5 sm:pt-1 lg:pt-2">
                <li>
                    <NavLink active={true}>Anime</NavLink>
                </li>
                <li>
                    <NavLink active={false}>Manga</NavLink>
                </li>
                <li>
                    <NavLink active={false}>Drama</NavLink>
                </li>
                <li>
                    <NavLink active={false}>News</NavLink>
                </li>
            </ul>
        </div>
    );
}

function SmartPhoneDrawer({ auth }) {
    return (
        <>
            <ul className="pb-2 bg-gradient-to-r from-[#C991E9] to-[#F4BEA7] grid grid-cols-4 sm:hidden">
                <li className="flex items-center justify-center">
                    <NavLink active={true}>Anime</NavLink>
                </li>
                <li className="flex items-center justify-center">
                    <NavLink active={false}>Manga</NavLink>
                </li>
                <li className="flex items-center justify-center">
                    <NavLink active={false}>Drama</NavLink>
                </li>
                <li className="flex items-center justify-center">
                    <NavLink active={false}>News</NavLink>
                </li>
            </ul>
            <div className="flex items-center pt-2 bg-black justify-evenly sm:hidden">
                {auth.user ? (
                    <>
                        <Link
                            className="flex flex-col items-center"
                            href="/history"
                        >
                            <PiTelevisionLight />
                            <span className="mx-auto text-xs text-stone-50">
                                History
                            </span>
                        </Link>
                        <Link
                            className="flex flex-col items-center"
                            href="/favorite"
                        >
                            <PiHeartStraightLight />
                            <span className="mx-auto text-xs text-stone-50">
                                Favorite
                            </span>
                        </Link>
                        <Link
                            className="flex flex-col items-center"
                            href="/community"
                        >
                            <PiPersonArmsSpreadThin />
                            <span className="mx-auto text-xs text-stone-50">
                                Community
                            </span>
                        </Link>
                        <Link
                            className="flex flex-col items-center"
                            href="/logout"
                        >
                            <PiDoorOpenLight />
                            <span className="mx-auto text-xs text-stone-50">
                                Logout
                            </span>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            className="flex flex-col items-center"
                            href="/community"
                        >
                            <PiPersonArmsSpreadThin />
                            <span className="mx-auto text-xs text-stone-50">
                                Community
                            </span>
                        </Link>
                        <Link
                            className="flex flex-col items-center"
                            href="/favorite"
                        >
                            <PiNotePencilLight />
                            <span className="mx-auto text-xs text-stone-50">
                                Register
                            </span>
                        </Link>
                        <Link
                            className="flex flex-col items-center"
                            href="/login"
                        >
                            <PiDoorOpenLight />
                            <span className="mx-auto text-xs text-stone-50">
                                Login
                            </span>
                        </Link>
                    </>
                )}
            </div>
        </>
    );
}

function UserProfile({ isOpenDrawer, onOpenDrawer, auth }) {
    return (
        <li className="flex justify-evenly">
            <Link
                href={auth.user ? "/profile" : "/register"}
                className="flex items-center justify-center w-9 h-9 sm:w-4 sm:h-4 sm:m-auto sm:block"
            >
                <PiLinuxLogoLight />
            </Link>
            <Link href="/" className="mx-auto text-center sm:text-left sm:mx-2">
                <p className="text-[#F4BEA7] text-xs  tracking-wide">
                    {auth.user ? "Premium Member" : "Global User"}
                </p>
                <p className="text-xs max-w-[250px] truncate text-center text-white sm:text-left">
                    {auth.user
                        ? auth.user.name
                        : "Hi ! Welcome to Apple Juice."}
                </p>
            </Link>
            {/* render hamburger button when sm: */}
            <button
                className="relative self-start group sm:ms-auto sm:hidden"
                onClick={(e) => onOpenDrawer(e)}
            >
                <div
                    className={`relative flex overflow-hidden items-center justify-center rounded-full w-9 h-9 transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 ${
                        isOpenDrawer ? "ring-4" : "ring-opacity-30"
                    }  duration-200 shadow-md`}
                >
                    <div
                        className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden`}
                    >
                        <div
                            className={`bg-white h-[2px] w-4 mx-auto  transform transition-all duration-300 origin-left ${
                                isOpenDrawer ? "translate-x-10" : ""
                            }`}
                        ></div>
                        <div
                            className={`bg-white h-[2px] w-4 mx-auto  rounded transform transition-all duration-300 ${
                                isOpenDrawer ? "translate-x-10" : ""
                            } delay-75`}
                        ></div>
                        <div
                            className={`bg-white h-[2px] w-4  mx-auto transform transition-all duration-300 origin-left ${
                                isOpenDrawer ? "translate-x-10" : ""
                            } delay-150`}
                        ></div>

                        <div
                            className={`absolute items-center justify-between transform transition-all duration-500 top-2.5  ${
                                isOpenDrawer
                                    ? "translate-x-0"
                                    : "-translate-x-10"
                            } flex  ${isOpenDrawer ? "w-12" : "w-0"}`}
                        >
                            <div
                                className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500  delay-300 ${
                                    isOpenDrawer ? "rotate-45" : "rotate-0"
                                }`}
                            ></div>
                            <div
                                className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500  delay-300 ${
                                    isOpenDrawer ? "-rotate-45" : "-rotate-0"
                                }`}
                            ></div>
                        </div>
                    </div>
                </div>
            </button>
        </li>
    );
}

function NavLinkIcon({ children, href, isSelfToRight = false, icon }) {
    return (
        <li
            className={`hidden sm:block self-start px-4 ${
                isSelfToRight ? "ms-auto" : ""
            }`}
        >
            <Link href={href}>
                <div className="w-4 h-4 m-auto">{icon}</div>
                <p className="text-xs font-medium text-white">{children}</p>
            </Link>
        </li>
    );
}

export default memo(Navbar);

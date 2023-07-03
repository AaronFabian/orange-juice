import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Navbar() {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    function handleOpenDrawer(e) {
        e.preventDefault();
        setIsOpenDrawer((isOpen) => !isOpen);
    }

    return (
        <>
            <nav className="h-12 pt-2 mx-auto bg-black sm:rounded-tr-md sm:rounded-tl-md">
                {/* In desktop always shown the NavButton, but hidden in smartphone */}
                <ul className="items-center w-11/12 h-8 m-auto sm:flex">
                    <UserProfile
                        isOpenDrawer={isOpenDrawer}
                        onOpenDrawer={handleOpenDrawer}
                    />
                    <NavButton href="/">Watchlist</NavButton>
                    <NavButton href="/">Favorite</NavButton>
                    <NavButton href="/">Community</NavButton>
                    <NavButton href="/" isSelfToRight={true}>
                        Logout
                    </NavButton>
                </ul>
            </nav>

            {/* DesktopDrawer always shown but hidden in smartphone */}
            <DesktopDrawer />

            {/* SmartphoneDrawer shown conditionally with boolean, keep state and hidden in desktop */}
            {/* SmartPhoneDrawer includes the navbar button */}
            {isOpenDrawer && <SmartPhoneDrawer />}
        </>
    );
}

// Local component for Navbar
function DesktopDrawer() {
    return (
        <div className="hidden sm:block bg-gradient-to-r from-[#C991E9] to-[#F4BEA7] h-12  mx-auto ">
            <ul className="flex pt-2 justify-evenly">
                <li>
                    <NavLink active={true}>Ongoing</NavLink>
                </li>
                <li>
                    <NavLink active={false}>Popular</NavLink>
                </li>
                <li>
                    <NavLink active={false}>Genres</NavLink>
                </li>
                <li>
                    <NavLink active={false}>Anime List</NavLink>
                </li>
                <li>
                    <NavLink active={false}>Reccomended</NavLink>
                </li>
                <li>
                    <NavLink active={false}>Movies</NavLink>
                </li>
                <li>
                    <NavLink active={false}>Most Watched</NavLink>
                </li>
                <li>
                    <NavLink active={false}>Upcomming</NavLink>
                </li>
            </ul>
        </div>
    );
}

function SmartPhoneDrawer() {
    return (
        <>
            <ul className="pb-2 bg-gradient-to-r from-[#C991E9] to-[#F4BEA7] grid grid-cols-3 sm:hidden">
                <li className="flex items-center justify-center">
                    <NavLink active={true}>Ongoing</NavLink>
                </li>
                <li className="flex items-center justify-center">
                    <NavLink active={false}>Popular</NavLink>
                </li>
                <li className="flex items-center justify-center">
                    <NavLink active={false}>Genres</NavLink>
                </li>
                <li className="flex items-center justify-center">
                    <NavLink active={false}>Anime List</NavLink>
                </li>
                <li className="flex items-center justify-center">
                    <NavLink active={false}>Reccomended</NavLink>
                </li>
                <li className="flex items-center justify-center">
                    <NavLink active={false}>Movies</NavLink>
                </li>
                <li className="flex items-center justify-center">
                    <NavLink active={false}>Most Watched</NavLink>
                </li>
                <li className="flex items-center justify-center">
                    <NavLink active={false}>Upcomming</NavLink>
                </li>
            </ul>
            <div className="flex py-1 bg-black justify-evenly sm:hidden">
                <Link className="text-sm text-white">Watchlist</Link>
                <Link className="text-sm text-white">Favorite</Link>
                <Link className="text-sm text-white">Logout</Link>
            </div>
        </>
    );
}

function UserProfile({ isOpenDrawer, onOpenDrawer }) {
    return (
        <li>
            <a href="/" className="flex">
                <div className="bg-white rounded-full w-7 h-7"></div>
                <div className="mx-2">
                    <p className="text-[#F4BEA7] text-xs">Premium Member</p>
                    <p className="text-xs text-white">Anon 123456</p>
                </div>
                {/* render hamburger button when sm: */}
                <button
                    className="relative self-start group ms-auto sm:hidden"
                    onClick={(e) => onOpenDrawer(e)}
                >
                    <div
                        className={`relative flex overflow-hidden items-center justify-center rounded-full w-[36px] h-[34px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 ${
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
                                        isOpenDrawer
                                            ? "-rotate-45"
                                            : "-rotate-0"
                                    }`}
                                ></div>
                            </div>
                        </div>
                    </div>
                </button>
            </a>
        </li>
    );
}

function NavButton({ children, href, isSelfToRight = false }) {
    return (
        <li
            className={`hidden sm:block self-start px-4 ${
                isSelfToRight ? "ms-auto" : ""
            }`}
        >
            <a href={href}>
                <div className="w-4 h-4 m-auto bg-white rounded-full"></div>
                <p className="text-xs font-medium text-white">{children}</p>
            </a>
        </li>
    );
}

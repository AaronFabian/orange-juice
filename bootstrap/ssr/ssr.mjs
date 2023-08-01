import * as jsxRuntime from "react/jsx-runtime";
import React, { createContext, useState, useContext, useEffect, memo, useReducer, forwardRef, useRef } from "react";
import { Link, Head, useForm, router, usePage, createInertiaApp } from "@inertiajs/react";
import { toast, Toaster } from "react-hot-toast";
import { createPortal } from "react-dom";
import { IconContext } from "react-icons";
import { PiTelevisionLight, PiHeartStraightLight, PiPersonArmsSpreadThin, PiSignOutLight, PiNotePencilLight, PiDoorOpenLight, PiLinuxLogoLight } from "react-icons/pi";
import videojs from "video.js";
import { BsSend } from "react-icons/bs";
import { GrFormClock, GrSearch } from "react-icons/gr";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
function ApplicationLogo(props) {
  return /* @__PURE__ */ jsx("svg", { ...props, viewBox: "0 0 316 316", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z" }) });
}
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-40",
        onClick: () => setOpen(false)
      }
    )
  ] });
};
const Content = ({
  align = "right",
  width = "48",
  contentClasses = "py-1 bg-white",
  children
}) => {
  useContext(DropDownContext);
  return /* @__PURE__ */ jsx(Fragment, {});
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
function NavLink({
  active = false,
  className = "",
  children,
  href = "/",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      href,
      ...props,
      className: "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " + (active ? "border-black text-gray-900 focus:border-indigo-700 " : "border-transparent text-gray-500 hover:text-gray-700 hover:border-black focus:text-gray-700 focus:border-gray-300 ") + className,
      children
    }
  );
}
function ResponsiveNavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: `w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${active ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`,
      children
    }
  );
}
function Authenticated({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxs("nav", { className: "bg-white border-b border-gray-100", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "block h-9 w-auto fill-current text-gray-800" }) }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden space-x-8 sm:-my-px sm:ml-10 sm:flex", children: /* @__PURE__ */ jsx(NavLink, { href: route("dashboard"), active: route().current("dashboard"), children: "Dashboard" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center sm:ml-6", children: /* @__PURE__ */ jsx("div", { className: "ml-3 relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
          /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
              children: [
                user.name,
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                )
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
            /* @__PURE__ */ jsx(Dropdown.Link, { href: route("profile.edit"), children: "Profile" }),
            /* @__PURE__ */ jsx(Dropdown.Link, { href: route("logout"), method: "post", as: "button", children: "Log Out" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "-mr-2 flex items-center sm:hidden", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowingNavigationDropdown((previousState) => !previousState),
            className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",
            children: /* @__PURE__ */ jsxs("svg", { className: "h-6 w-6", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: !showingNavigationDropdown ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16M4 18h16"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: showingNavigationDropdown ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                }
              )
            ] })
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "pt-2 pb-3 space-y-1", children: /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("dashboard"), active: route().current("dashboard"), children: "Dashboard" }) }),
        /* @__PURE__ */ jsxs("div", { className: "pt-4 pb-1 border-t border-gray-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-base text-gray-800", children: user.name }),
            /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-500", children: user.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1", children: [
            /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("profile.edit"), children: "Profile" }),
            /* @__PURE__ */ jsx(ResponsiveNavLink, { method: "post", href: route("logout"), as: "button", children: "Log Out" })
          ] })
        ] })
      ] })
    ] }),
    header && /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: header }) }),
    /* @__PURE__ */ jsx("main", { children })
  ] });
}
function Dashboard({ auth }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "p-6 text-gray-900", children: "You're logged in!" }) }) }) })
      ]
    }
  );
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
const initialState$2 = {
  animeList: [],
  isLoadingRecentEp: false,
  topAiringAnime: [],
  isLoadingTopAir: false,
  isSearchLoading: false,
  currentLocalPage: "home"
};
const HomeContext = createContext(initialState$2);
function HomeProvider({ children }) {
  const [animeList, setAnimeList] = useState([]);
  const [isLoadingRecentEp, setIsLoadingRecentEp] = useState(false);
  const [topAiringAnime, setTopAiringAnime] = useState([]);
  const [isLoadingTopAir, setIsLoadingTopAir] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [currentLocalPage, setCurrentLocalPage] = useState("home");
  useEffect(function() {
    setIsLoadingRecentEp(true);
    loadRecentAnime();
  }, []);
  useEffect(function() {
    async function loadTopAiringAnime() {
      setIsLoadingTopAir(true);
      try {
        const { data, status } = await axios.get(
          "https://api.consumet.org/anime/gogoanime/top-airing"
        );
        if (status !== 200)
          throw new Error("Error top-airing not available");
        setTopAiringAnime(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingTopAir(false);
      }
    }
    loadTopAiringAnime();
  }, []);
  useEffect(function() {
    const hash = window.location.hash;
    if (hash) {
      setCurrentLocalPage("stream");
    }
  }, []);
  function handleChangeScreen(localScreen, localParams) {
    setCurrentLocalPage(localScreen);
    if (localParams)
      window.location.hash = localParams;
    else
      window.location.hash = "";
  }
  async function handleSearchAnime(inputedAnime) {
    try {
      setIsSearchLoading(true);
      const { data, status } = await axios.get(
        `https://api.consumet.org/anime/gogoanime/${inputedAnime}`
      );
      if (status !== 200)
        throw new Error("Something gone wrong");
      if (!data.results.length) {
        return setCurrentLocalPage("not-found");
      }
      setAnimeList(data.results);
      setIsLoadingRecentEp(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSearchLoading(false);
      setIsLoadingRecentEp(false);
    }
  }
  function handleSetAnimeList(list) {
    setAnimeList(list);
  }
  async function loadRecentAnime() {
    try {
      const { data, status } = await axios.get(
        "https://api.consumet.org/anime/gogoanime/recent-episodes"
      );
      if (status !== 200)
        throw new Error("Something gone wrong with recent episode");
      setAnimeList(data.results);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoadingRecentEp(false);
    }
  }
  return /* @__PURE__ */ jsx(
    HomeContext.Provider,
    {
      value: {
        animeList,
        isLoadingRecentEp,
        topAiringAnime,
        isLoadingTopAir,
        currentLocalPage,
        isSearchLoading,
        // function
        handleChangeScreen,
        handleSetAnimeList,
        handleSearchAnime
      },
      children
    }
  );
}
function useHome() {
  const context = useContext(HomeContext);
  if (context === void 0)
    throw new Error("useHome was used outside of HomeProvider !");
  return context;
}
function WindowLayout({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "z-10 max-w-3xl mx-auto sm:-translate-y-1/2 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl sm:absolute sm:left-0 sm:right-0 sm:top-1/2", children });
}
const __vite_glob_0_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WindowLayout
}, Symbol.toStringTag, { value: "Module" }));
function ButtonOnSubmit({ children }) {
  return /* @__PURE__ */ jsx("button", { className: "w-full h-10 text-xl font-bold from-[#C991E9] to-[#D38AA8] bg-gradient-to-r hover:text-stone-300 duration-150", children });
}
const __vite_glob_0_49 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ButtonOnSubmit
}, Symbol.toStringTag, { value: "Module" }));
function Checkbox$1({ text, padding }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `flex items-center justify-end gap-2 ${padding ? padding : "py-6"} me-auto`,
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            className: "accent-purple_mood text-purple_mood focus:ring focus:ring-purple_mood_hard bg-stone-50",
            id: "remember_me_checkbox"
          }
        ),
        /* @__PURE__ */ jsx("label", { className: "text-stone-500", htmlFor: "remember_me_checkbox", children: text })
      ]
    }
  );
}
const __vite_glob_0_50 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Checkbox$1
}, Symbol.toStringTag, { value: "Module" }));
const checkbox = "_checkbox_b7e49_1";
const Input_module = {
  checkbox
};
function Input({
  name = "unknown",
  type = "text",
  label = "-",
  value,
  autoFocus,
  setValue,
  disabled = false,
  // style
  focusBorderColor = "focus:border-purple_mood",
  margin = "mt-8 mb-6",
  border = "border-gray-600"
}) {
  return /* @__PURE__ */ jsxs("div", { className: `relative group ${margin}`, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type,
        name,
        id: name,
        value,
        className: `block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white ${border} ${focusBorderColor} focus:outline-none focus:ring-0 peer text-purple_mood`,
        onChange: (e) => setValue == null ? void 0 : setValue(e.target.value),
        placeholder: " ",
        autoFocus,
        autoComplete: "off",
        disabled,
        required: true
      }
    ),
    /* @__PURE__ */ jsx(
      "label",
      {
        htmlFor: name,
        className: "peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple_mood_hard peer-focus:text-purpleborder-purple_mood peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
        children: label
      }
    )
  ] });
}
const __vite_glob_0_52 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Input
}, Symbol.toStringTag, { value: "Module" }));
function LoginPage() {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: ""
  });
  function submit(e) {
    e.preventDefault();
    router.post("/login", {
      ...data,
      _token: router.page.props.csrf_token
    });
  }
  return /* @__PURE__ */ jsx("form", { action: "", onSubmit: submit, children: /* @__PURE__ */ jsxs("main", { className: "grid grid-rows-2 rounded-md sm:grid-rows-none grid-rows sm:grid-cols-2 bg-stone-950 sm:h-app_height", children: [
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "img/login.png",
        alt: "Login image",
        className: "object-cover object-center h-full align-middle"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "m-auto w-72", children: [
      /* @__PURE__ */ jsx("h1", { className: "from-[#C991E9] to-[#D38AA8] text-transparent bg-clip-text bg-gradient-to-r text-5xl font-semibold", children: "おかえり" }),
      /* @__PURE__ */ jsx("p", { className: "text-2xl tracking-widest text-stone-50", children: "WELCOME BACK" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-0 w-full mt-8 mb-6 group", children: /* @__PURE__ */ jsx(
        Input,
        {
          type: "email",
          name: "email",
          label: "Email",
          autoFocus: true,
          setValue: (val) => setData("email", val)
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-0 w-full mb-6 group", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "password",
            name: "password",
            label: "Password",
            setValue: (val) => setData("password", val)
          }
        ),
        /* @__PURE__ */ jsx(Checkbox$1, { text: "Remember me" }),
        /* @__PURE__ */ jsx(ButtonOnSubmit, { children: "SIGN IN" }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/register",
            className: "block mx-auto mt-3 text-sm text-center align-middle text-stone-500 hover:text-purple_mood",
            children: "Don't have an account ? Click here."
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/",
            className: "block mt-20 duration-150 text-stone-500 hover:text-purple_mood",
            children: "← Go back home"
          }
        )
      ] })
    ] }) })
  ] }) });
}
const __vite_glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LoginPage
}, Symbol.toStringTag, { value: "Module" }));
const orangeJuice = "orange-juice";
const URL_ANIME_STREAMING_LINK = "https://api.consumet.org/anime/gogoanime/watch";
const URL_ANIME_DETAIL = "https://api.consumet.org/anime/gogoanime/info";
function convertISODate(date) {
  return new Date(date).toLocaleDateString(navigator.language, {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).split(" ");
}
function getHistory() {
  return JSON.parse(localStorage.getItem(orangeJuice));
}
function overWriteHistory(animeId, lastEpsNumber, lastEpsUrl) {
  const history = JSON.parse(localStorage.getItem(orangeJuice));
  localStorage.setItem(
    orangeJuice,
    JSON.stringify({
      ...history,
      animes: {
        ...history.animes,
        [animeId]: {
          ...history.animes[animeId],
          lastEps: lastEpsNumber,
          url: lastEpsUrl,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        }
      }
    })
  );
}
function addNewAnimeHistory(history, animeId, title, image) {
  localStorage.setItem(
    orangeJuice,
    JSON.stringify({
      ...history,
      animes: {
        ...history.animes,
        [animeId]: {
          id: animeId,
          lastEps: null,
          url: "",
          title,
          image,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: ""
        }
      }
    })
  );
}
function generateHistory(animeId, title, image) {
  localStorage.setItem(
    orangeJuice,
    JSON.stringify({
      animes: {
        [animeId]: {
          id: animeId,
          lastEps: null,
          url: "",
          title,
          image,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: ""
        }
      }
    })
  );
}
function handlePlayerReady(player) {
  player.on("ready", () => {
    console.log("player ready");
  });
  player.on("waiting", () => {
    console.log("video is ready to play");
  });
  player.on("dispose", () => {
    const minute = Math.floor(player.currentTime() / 60);
    const seconds = Math.floor(player.currentTime() % 60);
    console.log(`player stop at: ${minute}:${seconds}`);
  });
  player.on("ended", () => {
    console.log("Player finished");
  });
  player.on("error", () => {
    console.warn(player.error);
  });
}
function timeSince(date) {
  var seconds = Math.floor((/* @__PURE__ */ new Date() - date) / 1e3);
  var interval = seconds / 31536e3;
  if (interval > 1)
    return Math.floor(interval) + " years";
  interval = seconds / 2592e3;
  if (interval > 1)
    return Math.floor(interval) + " months";
  interval = seconds / 86400;
  if (interval > 1)
    return Math.floor(interval) + " days";
  interval = seconds / 3600;
  if (interval > 1)
    return Math.floor(interval) + " hours";
  interval = seconds / 60;
  if (interval > 1)
    return Math.floor(interval) + " minutes";
  return Math.floor(seconds) + " seconds";
}
const initialState$1 = {
  animeId: "",
  episodeId: "",
  nowWatching: "",
  animeEpisodeData: {},
  currentStreamSrc: [],
  currentQuality: null,
  isLoadingEpisodeData: false,
  isCurrentStreamLoading: false
};
const StreamContext = createContext(initialState$1);
function StreamProvider({ children }) {
  const [animeEpisodeData, setAnimeEpisodeData] = useState({});
  const [isLoadingEpisodeData, setIsLoadingEpisodeData] = useState(true);
  const [currentStreamSrc, setCurrentStreamSrc] = useState([]);
  const [nowWatching, setNowWatching] = useState("");
  const [isCurrentStreamLoading, setIsCurrentStreamLoading] = useState(false);
  const [currentQuality, setCurrentQuality] = useState(null);
  const [animeId, setAnimeId] = useState("");
  const [episodeId, setEpisodeId] = useState("");
  useEffect(function() {
    setIsLoadingEpisodeData(true);
    async function loadAnimeDetails(id) {
      var _a;
      try {
        const { status, data } = await axios.get(
          `${URL_ANIME_DETAIL}/${id}`
        );
        if (status !== 200)
          throw new Error("Anime not found !");
        const history = getHistory();
        if (!history)
          generateHistory(id, data.title, data.image);
        else if (!((_a = history.animes) == null ? void 0 : _a[id]))
          addNewAnimeHistory(history, id, data.title, data.image);
        else {
        }
        setAnimeEpisodeData(data);
        setAnimeId(id);
      } catch (error) {
        toast.error("Something gone wrong ! please check the URL.");
        setAnimeEpisodeData(null);
      } finally {
        setIsLoadingEpisodeData(false);
      }
    }
    const hashId = window.location.hash.replace("#", "");
    if (hashId)
      loadAnimeDetails(hashId);
    else {
      setIsLoadingEpisodeData(false);
      setAnimeEpisodeData(null);
    }
  }, []);
  async function handleChangeEpisode(id) {
    setIsCurrentStreamLoading(true);
    try {
      const res = await fetch(`${URL_ANIME_STREAMING_LINK}/${id}`);
      const data = await res.json();
      const sources = data.sources;
      if (!sources) {
        toast.error("sources not found :(");
        throw new Error("Fatal: sources not found :(");
      }
      setCurrentStreamSrc(sources);
      setEpisodeId(id);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsCurrentStreamLoading(false);
    }
  }
  function handleSetNowWatching(src) {
    setNowWatching(src);
  }
  function handleSetQuality(quality) {
    setCurrentQuality(quality);
  }
  return /* @__PURE__ */ jsx(
    StreamContext.Provider,
    {
      value: {
        animeEpisodeData,
        isLoadingEpisodeData,
        currentStreamSrc,
        nowWatching,
        isCurrentStreamLoading,
        currentQuality,
        animeId,
        episodeId,
        // function
        handleSetNowWatching,
        handleChangeEpisode,
        // async
        handlePlayerReady,
        // from utils
        handleSetQuality
      },
      children
    }
  );
}
function useStream() {
  const context = useContext(StreamContext);
  if (context === void 0)
    throw new Error("useStream was used outside of StreamProvider !");
  return context;
}
const styles$2 = {
  "scroll-y-mod": "_scroll-y-mod_1set5_1",
  "web-scroll-hide": "_web-scroll-hide_1set5_5"
};
function ApplicationLayout({ children, isAllowScroll }) {
  return (
    // this component must reuse for all page
    /* @__PURE__ */ jsx(
      "main",
      {
        className: `flex-1 lg:h-[40rem] bg-stone-950 sm:bg-application_layout_color sm:p-3 sm:flex justify-center sm:h-[38rem] mt-12 sm:mt-0`,
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: `relative flex-1 ${isAllowScroll ? "overflow-scroll " + styles$2["web-scroll-hide"] : "overflow-hidden"}`,
            children
          }
        )
      }
    )
  );
}
const __vite_glob_0_47 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ApplicationLayout
}, Symbol.toStringTag, { value: "Module" }));
function Background({ src, alt }) {
  return createPortal(
    /* @__PURE__ */ jsx(
      "img",
      {
        className: `hidden sm:inline w-full h-[100dvh] blur-md object-cover select-none`,
        src,
        alt,
        draggable: false
      }
    ),
    document.body
  );
}
const Background$1 = memo(Background);
const __vite_glob_0_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Background$1
}, Symbol.toStringTag, { value: "Module" }));
function ButtonText({
  children,
  width = "",
  onClick = () => {
  }
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `text-sm text-stone-400 hover:text-stone-50 active:text-gray-400 ${width}`,
      onClick,
      children
    }
  );
}
const __vite_glob_0_48 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ButtonText
}, Symbol.toStringTag, { value: "Module" }));
function Loader() {
  return /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm", children: /* @__PURE__ */ jsx("div", { className: "loader" }) });
}
const __vite_glob_0_53 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Loader
}, Symbol.toStringTag, { value: "Module" }));
function Loading() {
  return /* @__PURE__ */ jsx("div", { className: "relative flex flex-col items-center justify-center w-full h-screen sm:h-app_window_height sm:rounded-b-md bg-application_layout_color", children: /* @__PURE__ */ jsx(Loader, {}) });
}
const __vite_glob_0_54 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Loading
}, Symbol.toStringTag, { value: "Module" }));
function ToggleFavoriteButton({
  animeId,
  title,
  image,
  season
}) {
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [preventClick, setPreventClick] = useState(false);
  function handleAddToFavorite() {
    if (preventClick)
      return;
    setPreventClick(true);
    const favorite = {
      anime_id: animeId,
      title,
      poster: image,
      season,
      last_episode: ""
    };
    axios.post("/favorite/addToFavorite", {
      body: JSON.stringify(favorite)
    }).then((_) => {
      if (toggleFavorite)
        router.page.props.favoriteAnimes = [
          ...router.page.props.favoriteAnimes.filter(
            (fav) => fav.anime_id !== animeId
          )
        ];
      else
        router.page.props.favoriteAnimes = [
          ...router.page.props.favoriteAnimes,
          { anime_id: animeId }
        ];
      toast(
        toggleFavorite ? "Removed from favorite." : "Added to favorite."
      );
      setToggleFavorite(!toggleFavorite);
      setPreventClick(false);
    }).catch((err) => {
      console.error(err);
      toast.error("Something gone wrong :(");
    });
  }
  useEffect(
    // Determining the button state at start
    function() {
      var _a, _b;
      const isFavorited = (_b = (_a = router.page.props) == null ? void 0 : _a.favoriteAnimes) == null ? void 0 : _b.find(
        (fav) => fav.anime_id === animeId
      );
      if (isFavorited)
        setToggleFavorite(true);
    },
    []
  );
  return toggleFavorite ? /* @__PURE__ */ jsx(
    "button",
    {
      className: "text-sm text-stone-400 hover:text-stone-50 active:text-gray-400",
      onClick: handleAddToFavorite,
      children: "♥ Added to Favorite"
    }
  ) : /* @__PURE__ */ jsx(
    "button",
    {
      className: "text-sm text-stone-400 hover:text-stone-50 active:text-gray-400",
      onClick: handleAddToFavorite,
      children: "♡ Add to Favorite !"
    }
  );
}
const __vite_glob_0_55 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ToggleFavoriteButton
}, Symbol.toStringTag, { value: "Module" }));
const scrollGotoLeft = "_scrollGotoLeft_1f3e3_1";
const scrollDefault = "_scrollDefault_1f3e3_5";
const styles$1 = {
  scrollGotoLeft,
  scrollDefault
};
function SelectEpisodePage$1({
  currentEpsPage,
  onSetCurrentEpsPage
}) {
  const {
    animeEpisodeData: { episodes }
  } = useStream();
  const episodesLength = episodes.length;
  const episodePage = Math.ceil(episodesLength / 25);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ jsx("h3", { className: "inline text-left text-stone-50", children: "Select episodes" }),
    /* @__PURE__ */ jsx(
      "select",
      {
        id: "countries",
        className: "block h-8 text-xs placeholder-gray-400 bg-transparent border border-gray-300 rounded-none w-28 text-stone-50 bg-gray-50 focus:ring-[#F4BEA7] focus:border-[#F4BEA7]",
        value: currentEpsPage,
        onChange: (e) => onSetCurrentEpsPage(Number(e.target.value)),
        children: Array.from({ length: episodePage }, (_, index) => /* @__PURE__ */ jsxs(
          "option",
          {
            value: index + 1,
            className: "text-stone-950",
            children: [
              index * 25 + 1,
              " -",
              " ",
              (index + 1) * 25 <= episodesLength + 1 ? (index + 1) * 25 : episodesLength
            ]
          },
          index
        ))
      }
    )
  ] });
}
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SelectEpisodePage$1
}, Symbol.toStringTag, { value: "Module" }));
function SelectAnimeEpisodes({
  currentEps,
  currentSelectedEps,
  onSetCurrentSelectedEps,
  onHandleOverwriteHistory
}) {
  const {
    animeEpisodeData: { episodes },
    handleChangeEpisode
  } = useStream();
  return /* @__PURE__ */ jsx(
    "ul",
    {
      className: `font-medium text-xs gap-0.5 text-stone-50 grid grid-cols-5  pt-1.5`,
      children: episodes.slice((currentEps - 1) * 25, currentEps * 25).map((episode) => {
        return /* @__PURE__ */ jsx(
          "li",
          {
            className: `h-6 duration-300 transition-all border border-stone-50 group hover:bg-[#F4BEA7] cursor-pointer  ${currentSelectedEps === episode.number && "bg-[#FABEA7]"}`,
            children: /* @__PURE__ */ jsx(
              "button",
              {
                className: "w-full leading-6 group-hover:text-stone-950",
                onClick: () => {
                  onSetCurrentSelectedEps(episode.number);
                  handleChangeEpisode(episode.id);
                  onHandleOverwriteHistory(
                    episode.number,
                    episode.id
                  );
                },
                children: episode.number
              }
            )
          },
          episode.id
        );
      })
    }
  );
}
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SelectAnimeEpisodes
}, Symbol.toStringTag, { value: "Module" }));
function StreamQualityItem({
  source,
  handleSetNowWatching,
  active,
  onHandleSetQuality
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `h-6  duration-300 transition-all border text-stone-50 text-xs border-stone-50 group hover:bg-[#F4BEA7] cursor-pointer ${active && "bg-[#F4BEA7]"}`,
      onClick: () => {
        handleSetNowWatching(source.url);
        onHandleSetQuality(source.quality);
      },
      children: source.quality
    }
  );
}
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: StreamQualityItem
}, Symbol.toStringTag, { value: "Module" }));
function QualityButton() {
  const {
    currentQuality,
    currentStreamSrc,
    handleSetNowWatching,
    handleSetQuality
  } = useStream();
  return currentStreamSrc != void 0 && currentStreamSrc.length ? /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-stone-50 ", children: "Video Quality" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-5 mt-1 gap-0.5", children: currentStreamSrc.map((source) => /* @__PURE__ */ jsx(
      StreamQualityItem,
      {
        source,
        active: currentQuality === source.quality,
        handleSetNowWatching,
        onHandleSetQuality: handleSetQuality
      },
      source.url
    )) })
  ] }) : /* @__PURE__ */ jsx("h1", { className: "mt-5 text-sm text-stone-50 min-h-[100dvh] sm:min-h-0", children: "Almost there... 😉" });
}
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: QualityButton
}, Symbol.toStringTag, { value: "Module" }));
function StreamAside() {
  const [currentEpsPage, setCurrentEpsPage] = useState(1);
  const [currentSelectedEps, setCurrentSelectedEps] = useState(null);
  const {
    animeId,
    currentStreamSrc,
    handleSetNowWatching,
    handleChangeEpisode,
    handleSetQuality,
    animeEpisodeData: { episodes }
  } = useStream();
  function handleOverwriteHistory(lastEps, perEpisodeId) {
    overWriteHistory(animeId, lastEps, perEpisodeId);
  }
  useEffect(
    function() {
      var _a;
      if (!currentStreamSrc.length) {
        const history = getHistory();
        if (!history)
          router.visit("/");
        const animes = history == null ? void 0 : history.animes;
        const historyAnime = animes[animeId];
        if (!historyAnime.lastEps) {
          const defaultEpisode = (_a = episodes == null ? void 0 : episodes[0]) == null ? void 0 : _a.id;
          if (!defaultEpisode) {
            console.error("Source not found.");
            toast.error("Looks like the sources gone.");
            return;
          }
          handleChangeEpisode(defaultEpisode);
          setCurrentSelectedEps(1);
        } else {
          handleChangeEpisode(historyAnime.url);
          setCurrentSelectedEps(historyAnime.lastEps);
          setCurrentEpsPage(Math.ceil(historyAnime.lastEps / 25));
        }
      } else {
        if (currentStreamSrc == null ? void 0 : currentStreamSrc[2]) {
          handleSetNowWatching(currentStreamSrc[2].url);
          handleSetQuality(currentStreamSrc[2].quality);
        } else if (currentStreamSrc == null ? void 0 : currentStreamSrc[1]) {
          handleSetNowWatching(currentStreamSrc[1].url);
          handleSetQuality(currentStreamSrc[1].quality);
        } else if (currentStreamSrc == null ? void 0 : currentStreamSrc[0]) {
          handleSetNowWatching(currentStreamSrc[0].url);
          handleSetQuality(currentStreamSrc[0].quality);
        } else
          throw new Error("Unexpected behaviour.");
      }
    },
    [animeId, currentStreamSrc]
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `h-full px-3 py-4 overflow-y-auto  ${styles$1.scrollGotoLeft} `,
      children: /* @__PURE__ */ jsxs("div", { className: ` ${styles$1.scrollDefault}`, children: [
        /* @__PURE__ */ jsx(
          SelectEpisodePage$1,
          {
            onSetCurrentEpsPage: setCurrentEpsPage,
            currentEpsPage
          }
        ),
        /* @__PURE__ */ jsx(
          SelectAnimeEpisodes,
          {
            currentEps: currentEpsPage,
            currentSelectedEps,
            onSetCurrentSelectedEps: setCurrentSelectedEps,
            onHandleOverwriteHistory: handleOverwriteHistory
          }
        ),
        /* @__PURE__ */ jsx(QualityButton, {})
      ] })
    }
  );
}
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: StreamAside
}, Symbol.toStringTag, { value: "Module" }));
function SpAnimeItem({ anime, onHandleChangeScreen }) {
  const { id, title, image, genres } = anime;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      onClick: () => onHandleChangeScreen("stream", id),
      className: "grid h-32 grid-cols-[120px_1fr] px-4 py-3 overflow-hidden rounded shadow-xl sm:hidden gap-4",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "block object-cover w-full mx-auto h-28",
            src: image,
            alt: "Sunset in the mountains"
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm text-stone-50 line-clamp-2", children: title }),
          /* @__PURE__ */ jsx("div", { className: "", children: genres.map((a) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "inline-block px-1 py-0.5 mb-1 mr-2 text-[8px] font-semibold text-stone-950 bg-gray-200 rounded-full",
              children: a
            },
            a
          )) })
        ] })
      ]
    },
    title
  );
}
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SpAnimeItem
}, Symbol.toStringTag, { value: "Module" }));
function AnimeItem({ topAiringAnime, onHandleChangeScreen }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black ${styles$1.scrollGotoLeft} -scroll relative`,
      children: [
        /* @__PURE__ */ jsx("h2", { className: "text-left text-stone-50", children: "Popular anime" }),
        /* @__PURE__ */ jsx("ul", { className: `space-y-2 font-medium ${styles$1.scrollDefault}`, children: topAiringAnime.map((anime) => /* @__PURE__ */ jsx(
          Anime,
          {
            anime,
            onHandleChangeScreen
          },
          anime.id
        )) })
      ]
    }
  );
}
function Anime({ anime, onHandleChangeScreen }) {
  const { id, title, genres, image, url } = anime;
  return /* @__PURE__ */ jsx("li", { onClick: () => onHandleChangeScreen("stream", id), title, children: /* @__PURE__ */ jsxs(
    "div",
    {
      href: "#",
      className: "flex items-center p-2 text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
      children: [
        /* @__PURE__ */ jsx("img", { className: "h-16 w-14", src: image, alt: title }),
        /* @__PURE__ */ jsxs("div", { className: "self-start ml-3 leading-tight ", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm line-clamp-2 text-purple_mood", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-xs line-clamp-3", children: genres.join(", ") })
        ] })
      ]
    }
  ) });
}
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AnimeItem
}, Symbol.toStringTag, { value: "Module" }));
function HomeAside() {
  const { currentLocalPage } = useHome();
  return /* @__PURE__ */ jsxs(
    "aside",
    {
      id: "default-sidebar",
      className: "sm:w-60 pb-4 sm:pb-0 sm:h-[38rem] lg:h-[40rem] transition-transform   sm:translate-x-0 sm:block  bg-black w-full",
      "aria-label": "Sidebar",
      children: [
        currentLocalPage === "stream" && /* @__PURE__ */ jsx(StreamAside, {}),
        currentLocalPage === void 0 || currentLocalPage === "home" && /* @__PURE__ */ jsx(AnimeList, {})
      ]
    }
  );
}
function AnimeList() {
  const { topAiringAnime, handleChangeScreen, isLoadingRecentEp } = useHome();
  const windowWidth = window.innerWidth;
  return windowWidth > 640 ? /* @__PURE__ */ jsx(
    AnimeItem,
    {
      topAiringAnime,
      onHandleChangeScreen: handleChangeScreen
    }
  ) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "px-4 text-left sm:hidden text-stone-50", children: "Popular anime" }),
    !isLoadingRecentEp && topAiringAnime.map((anime) => /* @__PURE__ */ jsx(
      SpAnimeItem,
      {
        anime,
        onHandleChangeScreen: handleChangeScreen
      },
      anime.id
    ))
  ] });
}
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HomeAside
}, Symbol.toStringTag, { value: "Module" }));
const styles = {};
function Navbar() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const {
    props: { auth }
  } = usePage();
  function handleOpenDrawer(e) {
    e.preventDefault();
    setIsOpenDrawer((isOpen) => !isOpen);
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    IconContext.Provider,
    {
      value: {
        className: `stroke-purple_mood_hard ${styles["svg path"]} fill-purple_mood scale-125 `
      },
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 right-0 z-50 pt-2 pb-2 mx-auto bg-black sm:py-2 sm:static sm:rounded-tr-md sm:rounded-tl-md", children: [
          /* @__PURE__ */ jsxs("ul", { className: "items-center m-auto sm:h-8 w-app_inner_width sm:flex", children: [
            /* @__PURE__ */ jsx(
              UserProfile,
              {
                isOpenDrawer,
                onOpenDrawer: handleOpenDrawer,
                auth
              }
            ),
            auth.user && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                NavLinkIcon,
                {
                  href: "/history",
                  icon: /* @__PURE__ */ jsx(PiTelevisionLight, {}),
                  children: "History"
                }
              ),
              /* @__PURE__ */ jsx(
                NavLinkIcon,
                {
                  href: "/favorite",
                  icon: /* @__PURE__ */ jsx(PiHeartStraightLight, {}),
                  children: "Favorite"
                }
              ),
              /* @__PURE__ */ jsx(
                NavLinkIcon,
                {
                  href: "/community",
                  icon: /* @__PURE__ */ jsx(PiPersonArmsSpreadThin, {}),
                  children: "Community"
                }
              )
            ] }),
            auth.user ? /* @__PURE__ */ jsx(
              NavLinkIcon,
              {
                href: "/logout",
                isSelfToRight: true,
                icon: /* @__PURE__ */ jsx(PiSignOutLight, {}),
                children: "Logout"
              }
            ) : /* @__PURE__ */ jsxs("div", { className: "flex ms-auto", children: [
              /* @__PURE__ */ jsx(
                NavLinkIcon,
                {
                  href: "/",
                  icon: /* @__PURE__ */ jsx(PiPersonArmsSpreadThin, {}),
                  children: "Community"
                }
              ),
              /* @__PURE__ */ jsx(
                NavLinkIcon,
                {
                  href: "/register",
                  icon: /* @__PURE__ */ jsx(PiNotePencilLight, {}),
                  children: "Register"
                }
              ),
              /* @__PURE__ */ jsx(
                NavLinkIcon,
                {
                  href: "/login",
                  icon: /* @__PURE__ */ jsx(PiDoorOpenLight, {}),
                  children: "Login"
                }
              )
            ] })
          ] }),
          isOpenDrawer && /* @__PURE__ */ jsx(SmartPhoneDrawer, { auth })
        ] }),
        /* @__PURE__ */ jsx(DesktopDrawer, {})
      ]
    }
  ) });
}
function DesktopDrawer() {
  return /* @__PURE__ */ jsx("div", { className: "hidden sm:block bg-gradient-to-r from-[#C991E9] to-[#F4BEA7] sm:h-10 lg:h-12  mx-auto ", children: /* @__PURE__ */ jsxs("ul", { className: "flex justify-center gap-32 px-5 sm:pt-1 lg:pt-2", children: [
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { active: true, children: "Anime" }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { active: false, children: "Manga" }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { active: false, children: "Drama" }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { active: false, children: "News" }) })
  ] }) });
}
function SmartPhoneDrawer({ auth }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("ul", { className: "pb-2 bg-gradient-to-r from-[#C991E9] to-[#F4BEA7] grid grid-cols-4 sm:hidden", children: [
      /* @__PURE__ */ jsx("li", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(NavLink, { active: true, children: "Anime" }) }),
      /* @__PURE__ */ jsx("li", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(NavLink, { active: false, children: "Manga" }) }),
      /* @__PURE__ */ jsx("li", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(NavLink, { active: false, children: "Drama" }) }),
      /* @__PURE__ */ jsx("li", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(NavLink, { active: false, children: "News" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center pt-2 bg-black justify-evenly sm:hidden", children: auth.user ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          className: "flex flex-col items-center",
          href: "/history",
          children: [
            /* @__PURE__ */ jsx(PiTelevisionLight, {}),
            /* @__PURE__ */ jsx("span", { className: "mx-auto text-xs text-stone-50", children: "History" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Link,
        {
          className: "flex flex-col items-center",
          href: "/favorite",
          children: [
            /* @__PURE__ */ jsx(PiHeartStraightLight, {}),
            /* @__PURE__ */ jsx("span", { className: "mx-auto text-xs text-stone-50", children: "Favorite" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Link,
        {
          className: "flex flex-col items-center",
          href: "/community",
          children: [
            /* @__PURE__ */ jsx(PiPersonArmsSpreadThin, {}),
            /* @__PURE__ */ jsx("span", { className: "mx-auto text-xs text-stone-50", children: "Community" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Link,
        {
          className: "flex flex-col items-center",
          href: "/logout",
          children: [
            /* @__PURE__ */ jsx(PiDoorOpenLight, {}),
            /* @__PURE__ */ jsx("span", { className: "mx-auto text-xs text-stone-50", children: "Logout" })
          ]
        }
      )
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          className: "flex flex-col items-center",
          href: "/community",
          children: [
            /* @__PURE__ */ jsx(PiPersonArmsSpreadThin, {}),
            /* @__PURE__ */ jsx("span", { className: "mx-auto text-xs text-stone-50", children: "Community" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Link,
        {
          className: "flex flex-col items-center",
          href: "/favorite",
          children: [
            /* @__PURE__ */ jsx(PiNotePencilLight, {}),
            /* @__PURE__ */ jsx("span", { className: "mx-auto text-xs text-stone-50", children: "Register" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Link,
        {
          className: "flex flex-col items-center",
          href: "/login",
          children: [
            /* @__PURE__ */ jsx(PiDoorOpenLight, {}),
            /* @__PURE__ */ jsx("span", { className: "mx-auto text-xs text-stone-50", children: "Login" })
          ]
        }
      )
    ] }) })
  ] });
}
function UserProfile({ isOpenDrawer, onOpenDrawer, auth }) {
  return /* @__PURE__ */ jsxs("li", { className: "flex justify-evenly", children: [
    /* @__PURE__ */ jsx(
      Link,
      {
        href: auth.user ? "/profile" : "/register",
        className: "flex items-center justify-center w-9 h-9 sm:w-4 sm:h-4 sm:m-auto sm:block",
        children: /* @__PURE__ */ jsx(PiLinuxLogoLight, {})
      }
    ),
    /* @__PURE__ */ jsxs(Link, { href: "/", className: "mx-auto text-center sm:text-left sm:mx-2", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[#F4BEA7] text-xs  tracking-wide", children: auth.user ? "Premium Member" : "Global User" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs max-w-[250px] truncate text-center text-white sm:text-left", children: auth.user ? auth.user.name : "Hi ! Welcome to Apple Juice." })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "relative self-start group sm:ms-auto sm:hidden",
        onClick: (e) => onOpenDrawer(e),
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: `relative flex overflow-hidden items-center justify-center rounded-full w-9 h-9 transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 ${isOpenDrawer ? "ring-4" : "ring-opacity-30"}  duration-200 shadow-md`,
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: `flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden`,
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `bg-white h-[2px] w-4 mx-auto  transform transition-all duration-300 origin-left ${isOpenDrawer ? "translate-x-10" : ""}`
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `bg-white h-[2px] w-4 mx-auto  rounded transform transition-all duration-300 ${isOpenDrawer ? "translate-x-10" : ""} delay-75`
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `bg-white h-[2px] w-4  mx-auto transform transition-all duration-300 origin-left ${isOpenDrawer ? "translate-x-10" : ""} delay-150`
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: `absolute items-center justify-between transform transition-all duration-500 top-2.5  ${isOpenDrawer ? "translate-x-0" : "-translate-x-10"} flex  ${isOpenDrawer ? "w-12" : "w-0"}`,
                      children: [
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: `absolute bg-white h-[2px] w-5 transform transition-all duration-500  delay-300 ${isOpenDrawer ? "rotate-45" : "rotate-0"}`
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: `absolute bg-white h-[2px] w-5 transform transition-all duration-500  delay-300 ${isOpenDrawer ? "-rotate-45" : "-rotate-0"}`
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            )
          }
        )
      }
    )
  ] });
}
function NavLinkIcon({ children, href, isSelfToRight = false, icon }) {
  return /* @__PURE__ */ jsx(
    "li",
    {
      className: `hidden sm:block self-start px-4 ${isSelfToRight ? "ms-auto" : ""}`,
      children: /* @__PURE__ */ jsxs(Link, { href, children: [
        /* @__PURE__ */ jsx("div", { className: "w-4 h-4 m-auto", children: icon }),
        /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-white", children })
      ] })
    }
  );
}
const Navbar$1 = memo(Navbar);
const __vite_glob_0_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Navbar$1
}, Symbol.toStringTag, { value: "Module" }));
function Section({ children }) {
  return /* @__PURE__ */ jsx("section", { className: "flex flex-col-reverse overflow-hidden sm:flex-row sm:rounded-b-md sm:overflow-hidden", children });
}
const __vite_glob_0_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Section
}, Symbol.toStringTag, { value: "Module" }));
function NotFound({ text, def }) {
  if (def) {
    return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center justify-center w-full h-screen sm:h-app_window_height sm:rounded-b-md bg-application_layout_color", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl text-stone-50", children: text ?? "Page not found 🥹" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: "/",
          className: "block mt-4 duration-150 text-stone-950 hover:text-purple_mood",
          children: "← Go back home"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs(WindowLayout, { children: [
    /* @__PURE__ */ jsx(Navbar$1, {}),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center justify-center w-full h-screen sm:h-app_window_height sm:rounded-b-md bg-application_layout_color", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl text-stone-50", children: text ?? "Page not found 🥹" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: "/",
          className: "block mt-4 duration-150 text-stone-950 hover:text-purple_mood",
          children: "← Go back home"
        }
      )
    ] }) })
  ] });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NotFound
}, Symbol.toStringTag, { value: "Module" }));
const videoJs = "";
const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady } = props;
  React.useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);
      const player = playerRef.current = videojs(
        videoElement,
        options,
        () => onReady && onReady(player)
      );
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);
  React.useEffect(() => {
    const player = playerRef.current;
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);
  return /* @__PURE__ */ jsx("div", { "data-vjs-player": true, children: /* @__PURE__ */ jsx("div", { ref: videoRef }) });
};
function Comment({ comment }) {
  const { content, user, created_at: createdAt } = comment;
  const convertedTime = timeSince(new Date(createdAt));
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-6", children: [
    /* @__PURE__ */ jsx("div", { className: "relative inline-flex items-center justify-center flex-shrink-0 w-8 h-8 overflow-hidden bg-gray-600 rounded-full", children: /* @__PURE__ */ jsx("img", { src: "https://i.pravatar.cc/48", alt: user.name }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-stone-50", children: [
        user.name,
        /* @__PURE__ */ jsxs("span", { className: "pl-4 text-stone-400", children: [
          convertedTime,
          " ago"
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs tracking-wide text-stone-50", children: content })
    ] })
  ] });
}
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Comment
}, Symbol.toStringTag, { value: "Module" }));
function CommentPaginator({
  commentCache,
  onHandleGetComments
}) {
  const { nextPageUrl, prevPageUrl, page } = commentCache;
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "w-16", children: prevPageUrl && /* @__PURE__ */ jsx(ButtonText, { onClick: () => onHandleGetComments(page - 1), children: "< Previous" }) }),
    /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("p", { className: "text-stone-400", children: nextPageUrl ? "page " + page : "End of comment" }) }),
    /* @__PURE__ */ jsx("div", { className: "w-16", children: nextPageUrl && /* @__PURE__ */ jsx(ButtonText, { onClick: () => onHandleGetComments(page + 1), children: "Next >" }) })
  ] });
}
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CommentPaginator
}, Symbol.toStringTag, { value: "Module" }));
function CommentForm({ onHandleGetComments }) {
  const { data, setData, reset } = useForm({
    comment: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { animeId, episodeId } = useStream();
  function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    axios.post("/comment/addComment", {
      ...data,
      anime_id: animeId,
      episode_id: episodeId
    }).then((res) => {
      toast("Comment sent !", { icon: "😉" });
      reset("comment");
      setErrors({});
      onHandleGetComments();
    }).catch(({ response }) => {
      if (response.status === 401) {
        toast((t) => /* @__PURE__ */ jsxs("span", { children: [
          "You are not logged in. Login now",
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "px-2 py-1 ml-2 rounded-md text-stone-50 bg-purple_mood hover:bg-purple_mood_hard hover:text-stone-950",
              onClick: () => {
                toast.dismiss(t.id);
                router.visit("/login");
              },
              children: "Login"
            }
          )
        ] }));
        return;
      }
      setErrors({ comment: response.data.message });
      toast.error("Something gone wrong while sending the comment.");
    }).finally(() => setIsLoading(false));
  }
  return /* @__PURE__ */ jsxs("form", { action: "", onSubmit, className: "flex justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "basis-11/12", children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          name: "comment",
          label: "Enter comment",
          margin: "mt-2",
          border: "border-stone-50",
          value: data.comment,
          setValue: (val) => setData("comment", val),
          disabled: isLoading
        }
      ),
      (errors == null ? void 0 : errors.comment) && /* @__PURE__ */ jsx("small", { className: "text-xs text-red-300", children: errors.comment })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "self-center pr-2", children: /* @__PURE__ */ jsx(
      IconContext.Provider,
      {
        value: {
          className: `stroke-purple_mood_hard ${styles["svg path"]} fill-purple_mood scale-125 `
        },
        children: /* @__PURE__ */ jsx("button", { type: "sumbit", disabled: isLoading, children: /* @__PURE__ */ jsx(BsSend, {}) })
      }
    ) })
  ] });
}
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CommentForm
}, Symbol.toStringTag, { value: "Module" }));
function CommentColumn({ commentCache, onSetCommentCache }) {
  const { animeId, episodeId } = useStream();
  const [page, setPage] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  async function handleGetComments(gotoPage) {
    try {
      const { status, data } = await axios.get(
        `/comment/getComment/${animeId}/${episodeId}?page=${gotoPage ?? 1}`
      );
      if (status !== 200 || typeof data === "string")
        throw new Error("Something gone wrong :(");
      const {
        data: commentsList,
        current_page: curPage,
        next_page_url: nextUrl,
        prev_page_url: prevUrl,
        total
      } = data.data;
      setComments(commentsList);
      onSetCommentCache({
        page: curPage ?? 1,
        nextPageUrl: nextUrl,
        prevPageUrl: prevUrl,
        comments: commentsList ?? [],
        total
      });
      setPage(curPage);
      setIsLoading(false);
    } catch (error) {
      const { response } = error;
      if (response.status === 401) {
        toast((t) => /* @__PURE__ */ jsxs("span", { children: [
          "You are not logged in. Login now .😉",
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "bg-purple_mood",
              onClick: () => {
                toast.dismiss(t.id);
                router("/login");
              },
              children: "Login"
            }
          )
        ] }));
        setIsError(true);
        return;
      }
      setIsError(true);
      toast.error("Something gone wrong 😵");
      router.visit("/");
    }
  }
  useEffect(function() {
    if (commentCache) {
      const { page: cachedPage, comments: cachedComments } = commentCache;
      setPage(cachedPage);
      setComments(cachedComments);
    } else {
      setIsLoading(true);
      handleGetComments();
    }
  }, []);
  if (isLoading || !commentCache)
    return /* @__PURE__ */ jsx("h1", { className: "text-center text-md text-stone-400", children: "Loading..." });
  if (isError)
    return /* @__PURE__ */ jsx("h1", { className: "text-center text-md text-stone-400", children: "Uh oh something gone wrong... 😵" });
  const totalComments = commentCache.total;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("h3", { className: "mt-4 text-center text-stone-50", children: [
      "Total: ",
      totalComments
    ] }),
    /* @__PURE__ */ jsx(CommentForm, { onHandleGetComments: handleGetComments }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: comments.length ? /* @__PURE__ */ jsxs(Fragment, { children: [
      comments.map((comment) => /* @__PURE__ */ jsx(Comment, { comment }, comment.id)),
      /* @__PURE__ */ jsx(
        CommentPaginator,
        {
          commentCache,
          onHandleGetComments: handleGetComments,
          page
        }
      )
    ] }) : /* @__PURE__ */ jsx("h1", { className: "text-sm text-center text-stone-400", children: "Looks like there are no comment yet. Be the first comment here." }) })
  ] });
}
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CommentColumn
}, Symbol.toStringTag, { value: "Module" }));
function CommentSection() {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [commentCache, setCommentCache] = useState(null);
  if (!toggleOpen)
    return /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setToggleOpen(true),
        className: "block px-3 py-1 mx-auto mt-4 text-sm tracking-wide border rounded-full text-stone-50 border-stone-400 hover:text-stone-400 active:text-stone-50",
        children: "Open Comment"
      }
    );
  return /* @__PURE__ */ jsxs("div", { className: "px-2 mt-4", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setToggleOpen(false),
        className: "block px-3 py-1 mx-auto text-sm tracking-wide border rounded-full text-stone-50 border-stone-400 hover:text-stone-400 active:text-stone-50",
        children: "Close Comment"
      }
    ),
    /* @__PURE__ */ jsx(
      CommentColumn,
      {
        commentCache,
        onSetCommentCache: setCommentCache
      }
    )
  ] });
}
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CommentSection
}, Symbol.toStringTag, { value: "Module" }));
function StreamHoc() {
  const { handleChangeScreen } = useHome();
  const {
    props: { auth }
  } = usePage();
  const {
    animeEpisodeData,
    isLoadingEpisodeData: isLoading,
    nowWatching,
    isCurrentStreamLoading,
    animeId,
    episodeId,
    // function
    handlePlayerReady: handlePlayerReady2
  } = useStream();
  if (isLoading)
    return /* @__PURE__ */ jsx(Loading, {});
  if (!animeEpisodeData)
    return /* @__PURE__ */ jsx(NotFound, { def: true, text: "Anime not found 😵" });
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: nowWatching,
        type: "application/x-mpegURL"
      }
    ]
  };
  const { title, genres, totalEpisodes, image, type, status, description } = animeEpisodeData;
  const [season = "-", year = "-"] = type == null ? void 0 : type.split(" ", 2);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HomeAside, { localScreen: "stream" }),
    /* @__PURE__ */ jsxs(ApplicationLayout, { isAllowScroll: true, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex px-2 sm:px-0", children: [
        /* @__PURE__ */ jsx(ButtonText, { onClick: () => handleChangeScreen("home"), children: "← Back to home" }),
        auth.user && /* @__PURE__ */ jsx("div", { className: "space-x-2 ms-auto", children: /* @__PURE__ */ jsx(
          ToggleFavoriteButton,
          {
            animeId,
            image,
            season,
            title
          }
        ) })
      ] }),
      isCurrentStreamLoading && /* @__PURE__ */ jsx("div", { className: "w-full min-h-60 sm:h-[480px] flex justify-center items-center text-stone-50", children: "Please wait..." }),
      nowWatching && !isCurrentStreamLoading && /* @__PURE__ */ jsx("div", { className: "min-h-60 sm:min-h-[480px]", children: /* @__PURE__ */ jsx(
        VideoJS,
        {
          onReady: handlePlayerReady2,
          options: videoJsOptions
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 px-2 mt-2 sm:gap-4", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "object-cover w-32 sm:w-48 sm:h-64",
            src: image,
            alt: "Spy x Family"
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "mb-2 text-sm sm:text-xl text-stone-50", children: title }),
          /* @__PURE__ */ jsx("table", { className: "table-auto", children: /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { className: "h-5 text-xs sm:text-sm sm:h-6 text-stone-50", children: [
              /* @__PURE__ */ jsx("td", { className: "w-20", children: "Status:" }),
              /* @__PURE__ */ jsx("td", { children: status })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "h-5 text-xs sm:text-sm sm:h-6 text-stone-50", children: [
              /* @__PURE__ */ jsx("td", { className: "w-20", children: "Episodes:" }),
              /* @__PURE__ */ jsx("td", { children: totalEpisodes })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "h-5 text-xs sm:text-sm sm:h-6 text-stone-50", children: [
              /* @__PURE__ */ jsx("td", { className: "w-20", children: "Release date:" }),
              /* @__PURE__ */ jsx("td", { children: year })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "h-5 text-xs sm:text-sm sm:h-6 text-stone-50", children: [
              /* @__PURE__ */ jsx("td", { className: "w-20", children: "Season:" }),
              /* @__PURE__ */ jsx("td", { className: "capitalize", children: season })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "text-xs sm:text-sm text-stone-50", children: [
              /* @__PURE__ */ jsx("td", { children: "Genres:" }),
              /* @__PURE__ */ jsx("td", { children: genres.join(", ") })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs sm:text-sm text-stone-50 line-clamp-4", children: description })
        ] })
      ] }),
      episodeId && /* @__PURE__ */ jsx(CommentSection, {}, episodeId),
      /* @__PURE__ */ jsx(Background$1, { alt: title, src: image })
    ] })
  ] });
}
const __vite_glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: StreamHoc
}, Symbol.toStringTag, { value: "Module" }));
function LinkPagination({ children, to, active, onClick }) {
  if (to) {
    return /* @__PURE__ */ jsx(
      Link,
      {
        className: `px-3 py-1.5 rounded-full  ${active ? "bg-purple_mood text-stone-50" : "text-stone-950"}`,
        href: to,
        children
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `px-2 sm:px-3.5 sm:py-1.5 rounded-full  ${active ? "bg-purple_mood text-stone-50" : "text-stone-500 sm:text-stone-950"}`,
      onClick: () => onClick(Number(children)),
      children
    }
  );
}
const __vite_glob_0_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LinkPagination
}, Symbol.toStringTag, { value: "Module" }));
function Application() {
  const { animeList, isLoadingRecentEp } = useHome();
  const [currentPage, setCurrentPage] = useState(1);
  const pageLength = Math.ceil(animeList.length / 6);
  function handleChangePage(page) {
    setCurrentPage(page);
  }
  function handleNextOrPrevPage(goto) {
    if (goto === "next") {
      if (currentPage + 1 <= pageLength)
        setCurrentPage(currentPage + 1);
    } else if (currentPage - 1 >= 1)
      setCurrentPage(currentPage - 1);
  }
  useEffect(
    function() {
      setCurrentPage(1);
    },
    [animeList.length]
  );
  if (isLoadingRecentEp)
    return /* @__PURE__ */ jsx(Loading, {});
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("p", { className: "px-3 text-stone-50 sm:hidden", children: "Recently update" }),
    /* @__PURE__ */ jsx("div", { className: "grid w-full h-72 sm:h-[30rem] lg:h-[32rem]  gap-2 py-2 mx-auto sm:border-l sm:border-r sm:border-b px-4 rounded-b-md grid-cols-3", children: animeList.slice((currentPage - 1) * 6, currentPage * 6).map((anime) => /* @__PURE__ */ jsx(
      AnimeCard,
      {
        title: anime.title,
        episodes: (anime == null ? void 0 : anime.episodeNumber) ?? 0,
        imgSrc: anime.image,
        animeId: anime.id
      },
      anime.id
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-10 px-4 sm:h-14 sm:px-0", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "hidden w-24 h-8 rounded-full sm:inline bg-purple_mood hover:bg-purple_mood_hard hover:text-stone-200 active:text-stone-500",
          onClick: () => handleNextOrPrevPage("previous"),
          children: "Previous"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "px-2 rounded-full sm:hidden bg-purple_mood hover:bg-purple_mood_hard hover:text-stone-200 active:text-stone-500",
          onClick: () => handleNextOrPrevPage("previous"),
          children: "«"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "space-x-2", children: Array.from({ length: pageLength }, (_, index) => /* @__PURE__ */ jsx(
        LinkPagination,
        {
          active: index + 1 === currentPage,
          onClick: handleChangePage,
          children: index + 1
        },
        index
      )) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "hidden w-24 h-8 rounded-full sm:inline bg-purple_mood hover:bg-purple_mood_hard hover:text-stone-200 active:text-stone-500",
          onClick: () => handleNextOrPrevPage("next"),
          children: "Next"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "px-2 rounded-full sm:hidden bg-purple_mood hover:bg-purple_mood_hard hover:text-stone-200 active:text-stone-500",
          onClick: () => handleNextOrPrevPage("next"),
          children: "»"
        }
      )
    ] })
  ] });
}
function AnimeCard({ title, episodes, imgSrc, animeId }) {
  const { handleChangeScreen } = useHome();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative overflow-hidden transition-all rounded-md group hover:cursor-pointer",
      onClick: () => handleChangeScreen("stream", animeId),
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: `${imgSrc}`,
            alt: title,
            className: "object-cover object-center w-full h-full align-middle duration-300 group-hover:scale-110"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-center h-16 duration-300 bg-stone-950/60", children: [
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: "text-sm text-center sm:text-lg line-clamp-1 text-purple_mood",
              title,
              children: title
            }
          ),
          /* @__PURE__ */ jsxs("p", { className: "text-xxs sm:text-xs text-stone-50", children: [
            episodes ? "Episodes : " : "",
            " ",
            episodes ? episodes : ""
          ] })
        ] })
      ]
    }
  );
}
const __vite_glob_0_46 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Application
}, Symbol.toStringTag, { value: "Module" }));
function HomeHeader() {
  const [input, setInput] = useState("");
  const { handleSearchAnime, isSearchLoading } = useHome();
  function onSubmit(e) {
    e.preventDefault();
    if (!input)
      return;
    handleSearchAnime(input);
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "header",
    {
      className: `relative w-full pt-2 duration-150  bg-black h-14 sm:border-t sm:border-l sm:border-r border-white overflow-hidden sm:rounded-t-md`,
      children: /* @__PURE__ */ jsxs("form", { action: "", onSubmit, className: "relative", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: "block w-11/12 h-10 px-5 py-3 mx-auto text-sm border-gray-200 rounded-full bg-stone-50 focus:border-blue-500 focus:ring-blue-500 disabled:bg-stone-300",
            placeholder: "Search your favorite anime...",
            onChange: (e) => setInput(e.target.value),
            disabled: isSearchLoading,
            value: isSearchLoading ? "Searching for " + input : input
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "absolute px-[6px] py-1 border border-purple_mood text-red-500 bg-white rounded-full -translate-x-1/2 sm:-translate-x-full top-2 right-2 cursor-pointer",
            type: "submit",
            value: input,
            children: /* @__PURE__ */ jsx(
              IconContext.Provider,
              {
                value: {
                  className: `stroke-purple_mood_hard ${styles["svg path"]} fill-purple_mood`
                },
                children: isSearchLoading ? /* @__PURE__ */ jsx(GrFormClock, {}) : /* @__PURE__ */ jsx(GrSearch, {})
              }
            )
          }
        )
      ] })
    }
  ) });
}
const __vite_glob_0_51 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HomeHeader
}, Symbol.toStringTag, { value: "Module" }));
function Home() {
  const { currentLocalPage } = useHome();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar$1, {}),
    /* @__PURE__ */ jsxs(Section, { children: [
      currentLocalPage === "home" && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(HomeAside, {}),
        /* @__PURE__ */ jsxs(ApplicationLayout, { children: [
          /* @__PURE__ */ jsx(HomeHeader, {}),
          /* @__PURE__ */ jsx(Application, {})
        ] })
      ] }),
      currentLocalPage === "stream" && /* @__PURE__ */ jsx(StreamProvider, { children: /* @__PURE__ */ jsx(StreamHoc, {}) }),
      currentLocalPage === "not-found" && /* @__PURE__ */ jsx(NotFound, { text: "Anime not found 😵", def: true })
    ] })
  ] });
}
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
function Community() {
  return /* @__PURE__ */ jsx("h1", { children: "Category page" });
}
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Community
}, Symbol.toStringTag, { value: "Module" }));
function History() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar$1, {}),
    /* @__PURE__ */ jsx(ApplicationLayout, {})
  ] });
}
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: History
}, Symbol.toStringTag, { value: "Module" }));
function ProfileApplication() {
  return /* @__PURE__ */ jsx("div", { class: "w-full max-w-xs", children: /* @__PURE__ */ jsxs("form", { class: "bg-stone-950 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center", children: [
    /* @__PURE__ */ jsx("div", { class: "relative inline-flex items-center justify-center w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mb-4", children: /* @__PURE__ */ jsx("span", { class: "font-medium text-3xl text-gray-600 dark:text-gray-300", children: "JL" }) }),
    /* @__PURE__ */ jsxs("div", { class: "mb-4 self-stretch", children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          class: "block text-purple_mood text-sm font-bold mb-2",
          for: "username",
          children: "Username"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          class: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
          id: "username",
          type: "text",
          placeholder: "Username"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { class: "mb-4 self-stretch", children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          class: "block text-purple_mood text-sm font-bold mb-2",
          for: "password",
          children: "Password"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          class: "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
          id: "password",
          type: "password",
          placeholder: "******************"
        }
      ),
      /* @__PURE__ */ jsx("p", { class: "text-red-500 text-xs italic", children: "Please choose a password." })
    ] }),
    /* @__PURE__ */ jsxs("div", { class: "flex items-center justify-between mt-2 self-stretch", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          class: "inline-block align-baseline font-bold text-sm text-purple_mood_hard hover:text-purple_mood_slow",
          href: "#",
          children: "Reset"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          class: "bg-purple_mood hover:bg-purple_mood_hard text-stone-950 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
          type: "button",
          children: "Edit !"
        }
      )
    ] })
  ] }) });
}
const __vite_glob_0_45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProfileApplication
}, Symbol.toStringTag, { value: "Module" }));
function Edit() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar$1, {}),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx(ApplicationLayout, { isAllowScroll: true, children: /* @__PURE__ */ jsx(ProfileApplication, {}) }) })
  ] });
}
const __vite_glob_0_41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
const FAVORITE = {
  SET_ERROR: "set-error",
  SET_FAVORITE_LIST: "set-favorite-list",
  SET_EPISODE_LIST: "set-episode-list",
  SET_STREAM_URL: "set-stream-url",
  SET_QUALITY: "set-quality",
  SET_IS_CHANGING_EPISODE: "set-is-changing-episode",
  START_WATCHING: "start-watching",
  LOAD_FAVORITE_LIST: "load-favorite-list"
};
const initialState = {
  animeId: null,
  currentEpsNumber: null,
  currentQuality: null,
  nowWatching: null,
  // example = -episodes-1
  isError: false,
  isLoading: false,
  // run when user click favorite item
  isChangingEpisode: false,
  // run when user change episode
  qualitySrc: [],
  episodeList: [],
  // assigned from animeDetails.episodes
  favoriteList: [],
  // assigned from useEffect()
  animeDetails: {}
};
const reducer = function(state, action) {
  switch (action.type) {
    case "set-is-changing-episode":
      return {
        ...state,
        isChangingEpisode: true
      };
    case "set-quality":
      return {
        ...state,
        currentQuality: action.payload.quality,
        nowWatching: action.payload.nowWatching
      };
    case "set-stream-url":
      return {
        ...state,
        qualitySrc: action.payload.sources,
        nowWatching: action.payload.nowWatching,
        currentEpsNumber: action.payload.currentEpsNumber,
        currentQuality: action.payload.currentQuality,
        isLoading: false,
        isChangingEpisode: false
      };
    case "start-watching":
      return { ...state, isLoading: true, animeId: action.payload };
    case "set-episode-list":
      return {
        ...state,
        episodeList: action.payload.episodes,
        animeDetails: action.payload
        // save for later
      };
    case "set-favorite-list":
      return {
        ...state,
        favoriteList: state.favoriteList.filter(
          (s) => s.anime_id !== action.payload
        )
      };
    case "load-favorite-list":
      return { ...state, favoriteList: action.payload };
    case "set-error":
      return { ...state, isError: true };
    default:
      console.warn(action.type);
      throw new Error("Unexpected type !");
  }
};
const FavoriteContext = createContext();
function FavoriteProvider({ children }) {
  const { props } = usePage();
  const [
    {
      nowWatching,
      favoriteList,
      episodeList,
      currentEpsNumber,
      currentQuality,
      qualitySrc,
      animeId,
      isLoading,
      isError,
      isChangingEpisode,
      animeDetails
    },
    dispatch
  ] = useReducer(reducer, initialState);
  useEffect(function() {
    dispatch({
      type: FAVORITE.LOAD_FAVORITE_LIST,
      payload: props.favoriteAnimes
    });
  }, []);
  async function handleSetStreaming() {
    const history = getHistory();
    try {
      const currentAnime = history == null ? void 0 : history.animes[animeId];
      if (!history)
        generateHistory(
          animeDetails.id,
          animeDetails.title,
          animeDetails.image
        );
      let response = "";
      if (currentAnime === void 0 || !(currentAnime == null ? void 0 : currentAnime.url)) {
        const epsId = episodeList[0].id;
        response = await axios.get(
          `${URL_ANIME_STREAMING_LINK}/${epsId}`
        );
      } else {
        const epsId = currentAnime.url;
        response = await axios.get(
          `${URL_ANIME_STREAMING_LINK}/${epsId}`
        );
      }
      const sources = response.data.sources;
      autoPlaySource(sources, (currentAnime == null ? void 0 : currentAnime.lastEps) ?? 1, dispatch);
    } catch (error) {
      dispatch({ type: FAVORITE.SET_ERROR });
    }
  }
  async function handleChangingEpisode(epsId, lastEps) {
    dispatch({ type: FAVORITE.SET_IS_CHANGING_EPISODE });
    try {
      const { data } = await axios.get(
        `${URL_ANIME_STREAMING_LINK}/${epsId}`
      );
      autoPlaySource(data.sources, lastEps, dispatch);
      overWriteHistory(animeId, lastEps, epsId);
    } catch (error) {
      console.error(error);
      dispatch({ type: FAVORITE.SET_ERROR });
    }
  }
  return /* @__PURE__ */ jsx(
    FavoriteContext.Provider,
    {
      value: {
        animeId,
        nowWatching,
        currentEpsNumber,
        currentQuality,
        qualitySrc,
        isLoading,
        isError,
        isChangingEpisode,
        episodeList,
        favoriteList,
        animeDetails,
        // fn
        dispatch,
        handlePlayerReady,
        // @utils
        handleSetStreaming,
        handleChangingEpisode
      },
      children
    }
  );
}
function useFavorite() {
  const context = useContext(FavoriteContext);
  if (context === void 0)
    throw new Error("useFavorite used outside of FavoriteProvider !");
  return context;
}
function autoPlaySource(sources, numberOfEpisode, dispatch) {
  if (sources == null ? void 0 : sources[2])
    dispatch({
      type: FAVORITE.SET_STREAM_URL,
      payload: {
        sources,
        nowWatching: sources[2].url,
        currentEpsNumber: numberOfEpisode,
        currentQuality: sources[2].quality
      }
    });
  else if (sources == null ? void 0 : sources[1])
    dispatch({
      type: FAVORITE.SET_STREAM_URL,
      payload: {
        sources,
        nowWatching: sources[1].url,
        currentEpsNumber: numberOfEpisode,
        currentQuality: sources[1].quality
      }
    });
  else if (sources == null ? void 0 : sources[0])
    dispatch({
      type: FAVORITE.SET_STREAM_URL,
      payload: {
        sources,
        nowWatching: sources[0].url,
        currentEpsNumber: numberOfEpisode,
        currentQuality: sources[0].quality
      }
    });
  else
    throw new Error("Unexpected behaviour.");
}
function FavAnimeItem({ anime, onRemoveFavorite }) {
  const { dispatch, animeId: currentAnimeId } = useFavorite();
  const {
    title,
    poster: image,
    created_at: addedAt,
    anime_id: animeId
  } = anime;
  const [month, day, year] = convertISODate(addedAt);
  async function hanldeOnClickAnime(e) {
    e.preventDefault();
    dispatch({ type: FAVORITE.START_WATCHING, payload: animeId });
    try {
      const { status, data } = await axios.get(
        // get all anime detail but just catch the episodes list
        `${URL_ANIME_DETAIL}/${animeId}`
      );
      if (status !== 200)
        throw new Error("Something gone wrong :(");
      dispatch({ type: FAVORITE.SET_EPISODE_LIST, payload: data });
    } catch (error) {
      dispatch({ type: FAVORITE.SET_ERROR });
    }
  }
  return /* @__PURE__ */ jsxs("li", { className: "relative", onClick: hanldeOnClickAnime, title, children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex items-center p-2  rounded-lg cursor-pointer text-stone-50  hover:bg-gray-700 ${animeId === currentAnimeId ? "bg-gray-700" : ""}`,
        children: [
          /* @__PURE__ */ jsx("img", { className: "object-cover w-14", src: image, alt: title }),
          /* @__PURE__ */ jsxs("div", { className: "self-start ml-3 leading-tight ", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm line-clamp-2 text-purple_mood", children: title }),
            /* @__PURE__ */ jsxs("p", { className: "mt-2 text-xs line-clamp-3 text-stone-50", children: [
              "Added at ",
              /* @__PURE__ */ jsx("br", {}),
              day.replace(",", ""),
              " - ",
              month,
              " - ",
              year
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "absolute top-0 right-0 px-1.5 duration-300 opacity-50 rounded-full text-stone-50 hover:bg-red-300 pb-0.5 active:bg-red-400 hover:opacity-100 hover:text-stone-950 text-xs",
        onClick: (e) => {
          e.stopPropagation();
          onRemoveFavorite(animeId);
        },
        children: "x"
      }
    )
  ] });
}
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FavAnimeItem
}, Symbol.toStringTag, { value: "Module" }));
function FavoriteAside() {
  const { favoriteList, dispatch } = useFavorite();
  function removeFavorite(animeId) {
    axios.post("/favorite/deleteFavorite", {
      body: JSON.stringify({ id: animeId })
    }).then((_) => {
      dispatch({
        type: FAVORITE.SET_FAVORITE_LIST,
        payload: animeId
      });
      toast.success("Removed successfully");
    }).catch((_) => toast.error("Something gone wrong :("));
  }
  return /* @__PURE__ */ jsx(
    "aside",
    {
      id: "default-sidebar",
      className: "w-full pb-4 mt-12 transition-transform bg-black sm:w-60 sm:pb-0 sm:h-app_window_height sm:translate-x-0 sm:block sm:mt-0",
      "aria-label": "Sidebar",
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black ${styles$1.scrollGotoLeft} -scroll relative`,
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-left text-stone-50", children: "Favorite list" }),
            /* @__PURE__ */ jsx("ul", { className: `space-y-2 font-medium ${styles$1.scrollDefault}`, children: favoriteList.map((anime) => /* @__PURE__ */ jsx(
              FavAnimeItem,
              {
                anime,
                onRemoveFavorite: removeFavorite
              },
              anime.anime_id
            )) })
          ]
        }
      )
    }
  );
}
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FavoriteAside
}, Symbol.toStringTag, { value: "Module" }));
function SelectEpisodePage({ currentPage, setCurrentPage }) {
  const { episodeList } = useFavorite();
  const episodesLength = episodeList.length;
  const episodePage = Math.ceil(episodeList.length / 25);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 mt-4", children: [
    /* @__PURE__ */ jsx("h3", { className: "inline text-left text-stone-50", children: "Select episodes" }),
    /* @__PURE__ */ jsx(
      "select",
      {
        id: "countries",
        className: "block h-8 text-xs placeholder-gray-400 bg-transparent border border-gray-300 rounded-none w-28 text-stone-50 bg-gray-50 focus:ring-[#F4BEA7] focus:border-[#F4BEA7]",
        value: currentPage,
        onChange: (e) => setCurrentPage(Number(e.target.value)),
        children: Array.from({ length: episodePage }, (_, index) => /* @__PURE__ */ jsxs(
          "option",
          {
            value: index + 1,
            className: "text-stone-950",
            children: [
              index * 25 + 1,
              " -",
              " ",
              (index + 1) * 25 <= episodesLength + 1 ? (index + 1) * 25 : episodesLength
            ]
          },
          index
        ))
      }
    )
  ] });
}
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SelectEpisodePage
}, Symbol.toStringTag, { value: "Module" }));
function SelectEpisode({
  currentPage,
  currentEpisode,
  setCurrentEpisode
}) {
  const { episodeList, handleChangingEpisode } = useFavorite();
  function handleChangeEpisode(episode) {
    if (currentEpisode === episode.number)
      return;
    setCurrentEpisode(episode.number);
    handleChangingEpisode(episode.id, episode.number);
  }
  return /* @__PURE__ */ jsx("ul", { className: "font-medium text-xs gap-0.5 text-stone-50 grid grid-cols-5 pt-1.5 mb-2 w-fit", children: episodeList.slice((currentPage - 1) * 25, currentPage * 25).map((episode) => {
    return /* @__PURE__ */ jsx(
      "li",
      {
        className: `h-6 duration-300 transition-all border 
                    border-stone-50 group  hover:bg-[#F4BEA7] cursor-pointer  ${currentEpisode === episode.number && "bg-[#FABEA7]"}`,
        children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "w-full leading-6 px-2.5 group-hover:text-stone-950",
            onClick: () => handleChangeEpisode(episode),
            children: episode.number
          }
        )
      },
      episode.id
    );
  }) });
}
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SelectEpisode
}, Symbol.toStringTag, { value: "Module" }));
function SelectQuality() {
  const { qualitySrc, currentQuality, dispatch } = useFavorite();
  const [quality, setCurrentQuality] = useState(null);
  useEffect(
    function() {
      setCurrentQuality(currentQuality);
    },
    [currentQuality]
  );
  return /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-stone-50 ", children: "Video Quality" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-5 mt-1 gap-0.5 w-fit", children: qualitySrc.map((source) => /* @__PURE__ */ jsx(
      "button",
      {
        className: `py-1 px-1.5 duration-300 transition-all border text-stone-50 text-xs border-stone-50 group hover:bg-[#F4BEA7] cursor-pointer ${quality === source.quality && "bg-[#F4BEA7]"}`,
        onClick: () => {
          dispatch({
            type: FAVORITE.SET_QUALITY,
            payload: {
              quality: source.quality,
              nowWatching: source.url
            }
          });
          setCurrentQuality(source.quality);
        },
        children: source.quality
      },
      source.url
    )) })
  ] });
}
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SelectQuality
}, Symbol.toStringTag, { value: "Module" }));
function EpisodeController() {
  const { currentEpsNumber } = useFavorite();
  const [currentEpisode, setCurrentEpisode] = useState(currentEpsNumber);
  const [currentPage, setCurrentPage] = useState(
    Math.ceil(currentEpsNumber / 25)
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SelectEpisodePage,
      {
        currentPage,
        setCurrentPage
      }
    ),
    /* @__PURE__ */ jsx(
      SelectEpisode,
      {
        currentPage,
        currentEpisode,
        setCurrentEpisode
      }
    ),
    /* @__PURE__ */ jsx(SelectQuality, {})
  ] });
}
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EpisodeController
}, Symbol.toStringTag, { value: "Module" }));
function FavoritePageAlert({ children }) {
  return /* @__PURE__ */ jsx("h1", { className: "absolute left-0 right-0 text-xl font-medium text-center -translate-y-1/2 text-stone-950 top-1/2", children });
}
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FavoritePageAlert
}, Symbol.toStringTag, { value: "Module" }));
function FavoriteApplication() {
  const {
    isLoading,
    episodeList,
    handleSetStreaming,
    nowWatching,
    handlePlayerReady: handlePlayerReady2,
    isChangingEpisode,
    isError,
    animeDetails
  } = useFavorite();
  useEffect(
    function() {
      if (!episodeList.length)
        return;
      handleSetStreaming();
    },
    [episodeList]
  );
  if (isLoading)
    return /* @__PURE__ */ jsx(Loading, {});
  if (!isLoading && !episodeList.length)
    return /* @__PURE__ */ jsx(FavoritePageAlert, { children: "Continue watching by clicking your favorite anime 😉" });
  if (episodeList.length === null) {
    return /* @__PURE__ */ jsx(FavoritePageAlert, { children: "Anime could not be found ! 😵" });
  }
  if (isError)
    return /* @__PURE__ */ jsx(FavoritePageAlert, { children: "Something gone wrong ! 😵" });
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: nowWatching,
        type: "application/x-mpegURL"
      }
    ]
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    !isChangingEpisode ? /* @__PURE__ */ jsx("div", { className: "w-full min-h-[460px]", children: /* @__PURE__ */ jsx(
      VideoJS,
      {
        onReady: handlePlayerReady2,
        options: videoJsOptions
      }
    ) }) : /* @__PURE__ */ jsx("div", { className: "w-full h-[460px] flex justify-center items-center text-stone-50", children: "Please wait..." }),
    /* @__PURE__ */ jsx(EpisodeController, {}),
    /* @__PURE__ */ jsx(Background$1, { alt: animeDetails.title, src: animeDetails.image })
  ] });
}
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FavoriteApplication
}, Symbol.toStringTag, { value: "Module" }));
function Favorite() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar$1, {}),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs(FavoriteProvider, { children: [
      /* @__PURE__ */ jsx(FavoriteAside, {}),
      /* @__PURE__ */ jsx(ApplicationLayout, { isAllowScroll: true, children: /* @__PURE__ */ jsx(FavoriteApplication, {}) })
    ] }) })
  ] });
}
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Favorite
}, Symbol.toStringTag, { value: "Module" }));
const main = "";
function Main(props) {
  const title = props.title;
  let currentPage = null;
  switch (props.title) {
    case "Home":
      currentPage = /* @__PURE__ */ jsx(HomeProvider, { children: /* @__PURE__ */ jsx(Home, {}) });
      break;
    case "Login":
      currentPage = /* @__PURE__ */ jsx(LoginPage, {});
      break;
    case "Profile":
      currentPage = /* @__PURE__ */ jsx(Edit, {});
      break;
    case "History":
      currentPage = /* @__PURE__ */ jsx(History, {});
      break;
    case "Community":
      currentPage = /* @__PURE__ */ jsx(Community, {});
    case "Favorite":
      currentPage = /* @__PURE__ */ jsx(Favorite, {});
      break;
    default:
      currentPage = /* @__PURE__ */ jsx(NotFound, {});
      break;
  }
  useEffect(
    function() {
      if (props.flash.message) {
        toast.success(props.flash.message);
      }
    },
    [props.flash.message]
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: `${title} - Orange Juice` }),
    /* @__PURE__ */ jsx(WindowLayout, { children: currentPage }),
    /* @__PURE__ */ jsx(
      Toaster,
      {
        position: "top-right",
        gutter: 12,
        containerStyle: { margin: "8px" },
        toastOptions: {
          success: {
            duration: 3e3
          },
          error: {
            duration: 3e3
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px"
          }
        }
      }
    )
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Main
}, Symbol.toStringTag, { value: "Module" }));
function Guest({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "w-20 h-20 fill-current text-gray-500" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg", children })
  ] });
}
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx("p", { ...props, className: "text-sm text-red-600 " + className, children: message }) : null;
}
function InputLabel({ value, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx("label", { ...props, className: `block font-medium text-sm text-gray-700 ` + className, children: value ? value : children });
}
function PrimaryButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
const TextInput = forwardRef(function TextInput2({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      className: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " + className,
      ref: input
    }
  );
});
function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Confirm Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "This is a secure area of the application. Please confirm your password before continuing." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            isFocused: true,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Confirm" }) })
    ] })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConfirmPassword
}, Symbol.toStringTag, { value: "Module" }));
function ForgotPassword({ message }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one." }),
    message && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-green-600", children: message }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "block w-full mt-1",
          isFocused: true,
          onChange: (e) => setData("email", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Email Password Reset Link" }) })
    ] })
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ForgotPassword
}, Symbol.toStringTag, { value: "Module" }));
function Checkbox({ className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " + className
    }
  );
}
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            name: "remember",
            checked: data.remember,
            onChange: (e) => setData("remember", e.target.checked)
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-gray-600", children: "Remember me" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Forgot your password?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Log in" })
      ] })
    ] })
  ] });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  const submit = (e) => {
    e.preventDefault();
    router.post("/register", {
      ...data,
      _token: router.page.props.csrf_token
    });
  };
  return /* @__PURE__ */ jsxs(WindowLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("div", { className: "relative w-full h-screen sm:h-app_height sm:rounded-md bg-stone-950/70", children: /* @__PURE__ */ jsxs("form", { action: "", onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/img/register-bg.jpg",
          alt: "oshi no ko background",
          className: "absolute top-0 left-0 object-cover h-full -z-10 blur-sm"
        }
      ),
      /* @__PURE__ */ jsx(
        "h1",
        {
          className: "from-[#C991E9] to-[#D38AA8] text-transparent bg-clip-text bg-gradient-to-r text-5xl font-semibold text-center pt-6 sm:pt-0 sm:mt-8\n                    ",
          children: "登録"
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "text-xl tracking-widest text-center sm:text-2xl text-stone-50", children: "Register" }),
      /* @__PURE__ */ jsx("div", { className: "absolute z-10 w-11/12 sm:w-1/2 mx-auto -translate-x-1/2 -translate-y-1/2 border rounded-md h-[30rem] top-1/2 left-1/2 border-stone-50/50 group focus:border-purple_mood", children: /* @__PURE__ */ jsxs("div", { className: "w-11/12 mx-auto sm:w-4/5 ", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "text",
            name: "name",
            label: "Username",
            autoFocus: true,
            setValue: (val) => setData("name", val)
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "email",
            name: "user_email",
            label: "Email",
            setValue: (val) => setData("email", val)
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "password",
            name: "password",
            label: "Password",
            setValue: (val) => setData("password", val)
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "password",
            name: "password_confirmation",
            label: "Re-confirmed password",
            setValue: (val) => setData("password_confirmation", val)
          }
        ),
        /* @__PURE__ */ jsx(
          Checkbox$1,
          {
            text: "Policy & Agreement",
            padding: "pt-2 pb-6"
          }
        ),
        /* @__PURE__ */ jsx(ButtonOnSubmit, { children: "Register" }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/login",
            className: "block mx-auto mt-2 text-center duration-150 text-stone-500 hover:text-stone-50 sm:text-sm",
            children: "Already have an account ? Login here."
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute -translate-x-1/2 bottom-2 left-1/2", children: /* @__PURE__ */ jsx(
        Link,
        {
          href: "/",
          className: "duration-150 text-stone-500 hover:text-purple_mood",
          children: "← Go back home"
        }
      ) })
    ] }) }) })
  ] });
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register
}, Symbol.toStringTag, { value: "Module" }));
function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Reset Password" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            isFocused: true,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData("password_confirmation", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Reset Password" }) })
    ] })
  ] });
}
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Email Verification" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another." }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: "A new verification link has been sent to the email address you provided during registration." }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Resend Verification Email" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          children: "Log Out"
        }
      )
    ] }) })
  ] });
}
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VerifyEmail
}, Symbol.toStringTag, { value: "Module" }));
function DangerButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function Modal({
  children,
  show = false,
  maxWidth = "2xl",
  closeable = true,
  onClose = () => {
  }
}) {
}
function SecondaryButton({ type = "button", className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      type,
      className: `inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function DeleteUserForm({ className = "" }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  return /* @__PURE__ */ jsxs("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Delete Account" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain." })
    ] }),
    /* @__PURE__ */ jsx(DangerButton, { onClick: confirmUserDeletion, children: "Delete Account" }),
    /* @__PURE__ */ jsx(Modal, { show: confirmingUserDeletion, onClose: closeModal, children: /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Are you sure you want to delete your account?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password", className: "sr-only" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            className: "mt-1 block w-3/4",
            isFocused: true,
            placeholder: "Password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end", children: [
        /* @__PURE__ */ jsx(SecondaryButton, { onClick: closeModal, children: "Cancel" }),
        /* @__PURE__ */ jsx(DangerButton, { className: "ml-3", disabled: processing, children: "Delete Account" })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DeleteUserForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdatePasswordForm({ className = "" }) {
}
const __vite_glob_0_43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdatePasswordForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdateProfileInformation({
  mustVerifyEmail,
  status,
  className = ""
}) {
}
const __vite_glob_0_44 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdateProfileInformation
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Dashboard.jsx": __vite_glob_0_0, "./Pages/Main.jsx": __vite_glob_0_1, "./Pages/NotFound.jsx": __vite_glob_0_2, "./Pages/auth/ConfirmPassword.jsx": __vite_glob_0_3, "./Pages/auth/ForgotPassword.jsx": __vite_glob_0_4, "./Pages/auth/Login.jsx": __vite_glob_0_5, "./Pages/auth/Register.jsx": __vite_glob_0_6, "./Pages/auth/ResetPassword.jsx": __vite_glob_0_7, "./Pages/auth/VerifyEmail.jsx": __vite_glob_0_8, "./Pages/community/Community.jsx": __vite_glob_0_9, "./Pages/favorite/EpisodeController.jsx": __vite_glob_0_10, "./Pages/favorite/FavAnimeItem.jsx": __vite_glob_0_11, "./Pages/favorite/Favorite.jsx": __vite_glob_0_12, "./Pages/favorite/FavoriteApplication.jsx": __vite_glob_0_13, "./Pages/favorite/FavoriteAside.jsx": __vite_glob_0_14, "./Pages/favorite/FavoritePageAlert.jsx": __vite_glob_0_15, "./Pages/favorite/SelectEpisode.jsx": __vite_glob_0_16, "./Pages/favorite/SelectEpisodePage.jsx": __vite_glob_0_17, "./Pages/favorite/SelectQuality.jsx": __vite_glob_0_18, "./Pages/history/History.jsx": __vite_glob_0_19, "./Pages/home/Aside/AnimeItem.jsx": __vite_glob_0_20, "./Pages/home/Aside/HomeAside.jsx": __vite_glob_0_21, "./Pages/home/Aside/QualityButton.jsx": __vite_glob_0_22, "./Pages/home/Aside/SelectAnimeEpisodes.jsx": __vite_glob_0_23, "./Pages/home/Aside/SelectEpisodePage.jsx": __vite_glob_0_24, "./Pages/home/Aside/SpAnimeItem.jsx": __vite_glob_0_25, "./Pages/home/Aside/StreamAside.jsx": __vite_glob_0_26, "./Pages/home/Aside/StreamQualityItem.jsx": __vite_glob_0_27, "./Pages/home/Comment.jsx": __vite_glob_0_28, "./Pages/home/CommentColumn.jsx": __vite_glob_0_29, "./Pages/home/CommentForm.jsx": __vite_glob_0_30, "./Pages/home/CommentPaginator.jsx": __vite_glob_0_31, "./Pages/home/CommentSection.jsx": __vite_glob_0_32, "./Pages/home/Home.jsx": __vite_glob_0_33, "./Pages/home/StreamHoc.jsx": __vite_glob_0_34, "./Pages/login/Login.jsx": __vite_glob_0_35, "./Pages/partials/Background.jsx": __vite_glob_0_36, "./Pages/partials/LinkPagination.jsx": __vite_glob_0_37, "./Pages/partials/Navbar.jsx": __vite_glob_0_38, "./Pages/partials/Section.jsx": __vite_glob_0_39, "./Pages/partials/WindowLayout.jsx": __vite_glob_0_40, "./Pages/profile/Edit.jsx": __vite_glob_0_41, "./Pages/profile/Partials/DeleteUserForm.jsx": __vite_glob_0_42, "./Pages/profile/Partials/UpdatePasswordForm.jsx": __vite_glob_0_43, "./Pages/profile/Partials/UpdateProfileInformationForm.jsx": __vite_glob_0_44, "./Pages/profile/ProfileApplication.jsx": __vite_glob_0_45, "./Pages/ui/Application.jsx": __vite_glob_0_46, "./Pages/ui/ApplicationLayout.jsx": __vite_glob_0_47, "./Pages/ui/ButtonBack.jsx": __vite_glob_0_48, "./Pages/ui/ButtonOnSubmit.jsx": __vite_glob_0_49, "./Pages/ui/Checkbox.jsx": __vite_glob_0_50, "./Pages/ui/HomeHeader.jsx": __vite_glob_0_51, "./Pages/ui/Input.jsx": __vite_glob_0_52, "./Pages/ui/Loader.jsx": __vite_glob_0_53, "./Pages/ui/Loading.jsx": __vite_glob_0_54, "./Pages/ui/ToggleFavoriteButton.jsx": __vite_glob_0_55 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);

import styles from "./ApplicationLayout.module.css";

export default function ApplicationLayout({ children, isAllowScroll }) {
    return (
        // this component must reuse for all page
        <main
            className={`flex-1 lg:h-[40rem] bg-stone-950 sm:bg-application_layout_color sm:p-3 sm:flex justify-center sm:h-[38rem] mt-12 sm:mt-0`}
        >
            <div
                className={`relative flex-1 ${
                    isAllowScroll
                        ? "overflow-scroll " + styles["web-scroll-hide"]
                        : "overflow-hidden"
                }`}
            >
                {children}
            </div>
        </main>
    );
}

// border border-white overflow-hidden sm:rounded-md

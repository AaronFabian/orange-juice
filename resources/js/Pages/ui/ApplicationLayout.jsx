import styles from "./ApplicationLayout.module.css";

export default function ApplicationLayout({ children, isAllowScroll }) {
    return (
        // this component must reuse for all page
        <main
            className={`flex-1 h-[40rem] bg-application_layout_color sm:p-3 flex justify-center`}
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

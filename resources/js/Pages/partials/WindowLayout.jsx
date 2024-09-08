export default function WindowLayout({ children }) {
    // some browser has different viewport height
    const vh = window.innerHeight;

    return (
        <div className={`z-10 max-w-3xl mx-auto ${vh < 740 && 'sm:scale-90'} sm:-translate-y-1/2 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl sm:absolute sm:left-0 sm:right-0 sm:top-1/2`}>
            {children}
        </div>
    );
}

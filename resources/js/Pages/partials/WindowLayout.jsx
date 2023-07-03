export default function WindowLayout({ children }) {
    return (
        <div className="max-w-3xl mx-auto lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            {children}
        </div>
    );
}

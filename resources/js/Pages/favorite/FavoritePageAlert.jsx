export default function FavoritePageAlert({ children }) {
    return (
        <h1 className="absolute left-0 right-0 text-xl font-medium text-center -translate-y-1/2 text-stone-950 top-1/2">
            {children}
        </h1>
    );
}

import { useFavorite } from "@/contexts/FavoriteProvider";

export default function FavoriteApplication() {
    const state = useFavorite();

    console.log(state);
    return (
        <h1 className="text-stone-50">
            Continue watching by clicking your favorite anime ! 😉
        </h1>
    );
}

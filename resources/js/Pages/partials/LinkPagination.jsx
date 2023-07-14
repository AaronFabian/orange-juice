import { Link } from "@inertiajs/react";

export default function LinkPagination({ children, to, active, onClick }) {
    if (to) {
        return (
            <Link
                className={`px-3 py-1.5 rounded-full  ${
                    active ? "bg-purple_mood text-stone-50" : "text-stone-950"
                }`}
                href={to}
            >
                {children}
            </Link>
        );
    }

    // children expected Number
    return (
        <button
            className={`px-3 py-1.5 rounded-full  ${
                active ? "bg-purple_mood text-stone-50" : "text-stone-950"
            }`}
            onClick={() => onClick(Number(children))}
        >
            {children}
        </button>
    );
}

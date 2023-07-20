export default function ButtonText({ children, onClick }) {
    return (
        <button
            className="text-sm text-stone-400 hover:text-stone-50 active:text-gray-400"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

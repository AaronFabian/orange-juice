export default function ButtonText({
    children,
    width = "",
    onClick = () => {},
}) {
    return (
        <button
            className={`text-sm text-stone-400 hover:text-stone-50 active:text-gray-400 ${width}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

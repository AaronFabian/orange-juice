export default function ButtonOnSubmit({ children }) {
    return (
        <button className="w-full h-10 text-xl font-bold from-[#C991E9] to-[#D38AA8] bg-gradient-to-r hover:text-stone-300 duration-150">
            {children}
        </button>
    );
}

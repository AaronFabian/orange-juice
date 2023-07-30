export default function Section({ children }) {
    // This Section will determine the layout should horizontal (desktop) or vertical // (smartphone)
    // also in smartphone the layout will be in row-reverse
    return (
        <section className="flex flex-col-reverse overflow-hidden sm:flex-row sm:rounded-b-md sm:overflow-hidden">
            {children}
        </section>
    );
}

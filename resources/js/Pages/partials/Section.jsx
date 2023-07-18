export default function Section({ children }) {
    // This Section will determine the layout should horizontal (desktop) or vertical (smartphone)
    return (
        <section className="overflow-hidden sm:flex sm:rounded-b-md sm:overflow-hidden">
            {children}
        </section>
    );
}

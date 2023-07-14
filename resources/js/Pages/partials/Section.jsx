export default function Section({ children }) {
    // This Section will determine the layout should horizontal (desktop) or vertical (smartphone)
    return <section className="sm:flex">{children}</section>;
}

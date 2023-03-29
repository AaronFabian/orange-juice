import { Link, Head } from "@inertiajs/react";

export default function Main(props) {
    console.log(props);

    return (
        <>
            <Head title="Home - Orange juice" />
            <h1 className="text-cyan-800">Hello from react </h1>
            <Link href="/home">Go to next page</Link>
        </>
    );
}

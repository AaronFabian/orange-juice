import { Link, Head } from "@inertiajs/react";

export default function ExplorePage(props) {
    console.log(props);
    return (
        <>
            <h1>Hello from home</h1>
            <Link href="watch">Go to anime</Link>
        </>
    );
}

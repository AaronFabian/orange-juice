import { router } from "@inertiajs/react";
import Navbar from "../partials/Navbar";
import ApplicationLayout from "../ui/ApplicationLayout";

export default function Favorite() {
    console.log(router);

    return (
        <>
            <Navbar />
            <ApplicationLayout></ApplicationLayout>
        </>
    );
}

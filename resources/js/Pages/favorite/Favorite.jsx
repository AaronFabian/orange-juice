import Navbar from "../partials/Navbar";
import Section from "../partials/Section";
import ApplicationLayout from "../ui/ApplicationLayout";
import FavoriteAside from "./FavoriteAside";
import FavoriteApplication from "./FavoriteApplication";
import { useReducer } from "react";
import { FavoriteProvider } from "@/contexts/FavoriteProvider";

export default function Favorite() {
    return (
        <>
            <Navbar />
            <Section>
                {/* set local provider for favorite page only */}
                <FavoriteProvider>
                    <FavoriteAside />
                    <ApplicationLayout>
                        <FavoriteApplication />
                    </ApplicationLayout>
                </FavoriteProvider>
            </Section>
        </>
    );
}

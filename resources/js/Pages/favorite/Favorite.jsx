import { FavoriteProvider } from "@/contexts/FavoriteProvider";
import Navbar from "../partials/Navbar";
import Section from "../partials/Section";
import ApplicationLayout from "../ui/ApplicationLayout";
import FavoriteAside from "./FavoriteAside";
import FavoriteApplication from "./FavoriteApplication";

export default function Favorite() {
    return (
        <>
            <Navbar />
            <Section>
                {/* set local provider for favorite page only */}
                <FavoriteProvider>
                    <FavoriteAside />
                    <ApplicationLayout isAllowScroll={true}>
                        <FavoriteApplication />
                    </ApplicationLayout>
                </FavoriteProvider>
            </Section>
        </>
    );
}

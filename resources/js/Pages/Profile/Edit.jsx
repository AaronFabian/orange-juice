import Navbar from "../partials/Navbar";
import Section from "../partials/Section";
import ApplicationLayout from "../ui/ApplicationLayout";
import ProfileApplication from "./ProfileApplication";

export default function Edit() {
    return (
        <>
            <Navbar />
            <Section>
                <ApplicationLayout isAllowScroll={true}>
                    <ProfileApplication />
                </ApplicationLayout>
            </Section>
        </>
    );
}

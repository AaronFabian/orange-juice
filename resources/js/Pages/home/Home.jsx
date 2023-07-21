import { useHome } from "@/contexts/HomeProvider";
import { StreamProvider } from "@/contexts/StreamProvider";

import StreamHoc from "./StreamHoc";
import ApplicationLayout from "../ui/ApplicationLayout";
import Application from "../ui/Application";
import HomeHeader from "../ui/HomeHeader";
import Navbar from "../partials/Navbar";
import Aside from "../partials/Aside";
import Section from "../partials/Section";
import NotFound from "../NotFound";

export default function Home() {
    const { currentLocalPage } = useHome();

    return (
        <>
            <Navbar />
            <Section>
                {currentLocalPage === "home" && (
                    <>
                        <Aside />
                        <ApplicationLayout>
                            <HomeHeader />
                            <Application />
                        </ApplicationLayout>
                    </>
                )}

                {/* In order to fetch the anime episode */}
                {/* set local Provider to get the window.hash */}
                {currentLocalPage === "stream" && (
                    <StreamProvider>
                        <StreamHoc />
                    </StreamProvider>
                )}

                {currentLocalPage === "not-found" && (
                    <NotFound text="Anime not found 😵" def={true} />
                )}
            </Section>
        </>
    );
}

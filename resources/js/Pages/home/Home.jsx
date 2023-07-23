import { useHome } from "@/contexts/HomeProvider";
import { StreamProvider } from "@/contexts/StreamProvider";

import StreamHoc from "./StreamHoc";
import ApplicationLayout from "../ui/ApplicationLayout";
import Application from "../ui/Application";
import HomeHeader from "../ui/HomeHeader";
import Navbar from "../partials/Navbar";
import Section from "../partials/Section";
import NotFound from "../NotFound";
import HomeAside from "./Aside/HomeAside";

export default function Home() {
    const { currentLocalPage } = useHome();

    return (
        <>
            <Navbar />
            <Section>
                {currentLocalPage === "home" && (
                    <>
                        <HomeAside />
                        <ApplicationLayout>
                            <HomeHeader />
                            <Application />
                        </ApplicationLayout>
                    </>
                )}

                {/* In order to fetch the anime per episode */}
                {/* set local Provider to get the window.hash */}
                {currentLocalPage === "stream" && (
                    <StreamProvider>
                        <StreamHoc />
                    </StreamProvider>
                )}

                {/* Render when user is searching unexpected/not found anime to server */}
                {currentLocalPage === "not-found" && (
                    <NotFound text="Anime not found 😵" def={true} />
                )}
            </Section>
        </>
    );
}

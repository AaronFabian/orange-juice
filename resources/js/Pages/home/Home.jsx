import { useHome } from "@/contexts/HomeProvider";

import ApplicationLayout from "../ui/ApplicationLayout";
import Application from "../ui/Application";
import Aside from "../ui/Aside";
import Navbar from "../partials/Navbar";
import HomeHeader from "../ui/HomeHeader";
import Section from "../partials/Section";
import StreamHoc from "./StreamHoc";
import { StreamProvider } from "@/contexts/StreamProvider";
import NotFound from "../NotFound";

export default function Home() {
    const { currentLocalPage, handleChangeScreen } = useHome();

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

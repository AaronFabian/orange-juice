import { useHome } from "@/contexts/HomeProvider";
import { useStream } from "@/contexts/StreamProvider";
import { usePage } from "@inertiajs/react";

import ApplicationLayout from "../ui/ApplicationLayout";
import Background from "../partials/Background";
import ButtonText from "../ui/ButtonBack";
import Loading from "../ui/Loading";
import ToggleFavoriteButton from "../ui/ToggleFavoriteButton";
import HomeAside from "./Aside/HomeAside";
import NotFound from "../NotFound";
import VideoJS from "@/Components/VideoJs";
import CommentSection from "./CommentSection";

export default function StreamHoc() {
    const { handleChangeScreen } = useHome();
    const {
        props: { auth },
    } = usePage();

    const {
        animeEpisodeData,
        isLoadingEpisodeData: isLoading,
        nowWatching,
        isCurrentStreamLoading,
        animeId,
        episodeId,

        // function
        handlePlayerReady,
    } = useStream();

    if (isLoading) return <Loading />;

    if (!animeEpisodeData)
        return <NotFound def={true} text="Anime not found 😵" />;

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
            {
                src: nowWatching,
                type: "application/x-mpegURL",
            },
        ],
    };

    const { title, genres, totalEpisodes, image, type, status, description } =
        animeEpisodeData;
    const [season = "-", year = "-"] = type?.split(" ", 2);

    return (
        <>
            <HomeAside localScreen="stream" />
            <ApplicationLayout isAllowScroll={true}>
                <div className="flex px-2 sm:px-0">
                    <ButtonText onClick={() => handleChangeScreen("home")}>
                        &larr; Back to home
                    </ButtonText>

                    {auth.user && (
                        <div className="space-x-2 ms-auto">
                            <ToggleFavoriteButton
                                animeId={animeId}
                                image={image}
                                season={season}
                                title={title}
                            />
                        </div>
                    )}
                </div>

                {isCurrentStreamLoading && (
                    <div className="w-full min-h-60 sm:h-[260px] lg:min-h-[480px]: flex justify-center items-center text-stone-50">
                        Please wait...
                    </div>
                )}

                {nowWatching && !isCurrentStreamLoading && (
                    <div className="min-h-60 sm:min-h-[260px] lg:min-h-[480px]:">
                        <VideoJS
                            onReady={handlePlayerReady}
                            options={videoJsOptions}
                        />
                    </div>
                )}

                <div className="flex gap-2 px-2 mt-2 sm:px-0 sm:gap-4">
                    <img
                        className="object-cover w-32 sm:w-48 sm:h-64"
                        src={image}
                        alt="Spy x Family"
                    />

                    <div>
                        <h1 className="mb-2 text-sm sm:text-xl text-stone-50">
                            {title}
                        </h1>
                        <table className="table-auto">
                            <tbody>
                                <tr className="h-5 text-xs sm:text-sm sm:h-6 text-stone-50">
                                    <td className="w-20">Status:</td>
                                    <td>{status}</td>
                                </tr>
                                <tr className="h-5 text-xs sm:text-sm sm:h-6 text-stone-50">
                                    <td className="w-20">Episodes:</td>
                                    <td>{totalEpisodes}</td>
                                </tr>
                                <tr className="h-5 text-xs sm:text-sm sm:h-6 text-stone-50">
                                    <td className="w-20">Release date:</td>
                                    <td>{year}</td>
                                </tr>
                                <tr className="h-5 text-xs sm:text-sm sm:h-6 text-stone-50">
                                    <td className="w-20">Season:</td>
                                    <td className="capitalize">{season}</td>
                                </tr>
                                <tr className="text-xs sm:text-sm text-stone-50">
                                    <td>Genres:</td>
                                    <td>{genres.join(", ")}</td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="mt-4 text-xs sm:text-sm text-stone-50 line-clamp-4">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Sometimes the episodeId still not arrived so prevent that */}
                {episodeId && <CommentSection key={episodeId} />}

                <Background alt={title} src={image} />
            </ApplicationLayout>
        </>
    );
}

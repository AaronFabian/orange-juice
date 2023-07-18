import Loader from "./Loader";

export default function Loading() {
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-screen sm:h-app_window_height sm:rounded-b-md bg-application_layout_color">
            <Loader />
        </div>
    );
}

import { createPortal } from "react-dom";

export default function Background({ src, alt }) {
    return createPortal(
        <img
            className="w-full h-[100dvh] blur-md object-cover "
            src={src}
            alt={alt}
        />,
        document.body
    );
}

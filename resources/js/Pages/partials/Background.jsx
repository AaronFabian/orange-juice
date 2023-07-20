import { memo } from "react";
import { createPortal } from "react-dom";

function Background({ src, alt }) {
    return createPortal(
        <img
            className={`w-full h-[100dvh] blur-md object-cover select-none`}
            src={src}
            alt={alt}
            draggable={false}
        />,
        document.body
    );
}

export default memo(Background);

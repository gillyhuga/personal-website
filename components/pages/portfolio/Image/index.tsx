import React, { memo } from "react";
import NextImage from "next/image";

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}

function Image({
    src,
    alt,
    className,
}: ImageProps) {
    return (
        <div className={`relative overflow-hidden ${className || ""}`}>
            <NextImage
                src={src}
                alt={alt}
                layout="fill"
                blurDataURL={src}
                loading="lazy"
                placeholder="empty"
                className="object-cover w-full h-full"
            />
        </div>
    );
}

export default memo(Image);
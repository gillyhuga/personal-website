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
                src={src ? src : "/images/no-thumbnail.png"}
                alt={alt}
                fill
                blurDataURL={src ? src : "/images/no-thumbnail.png"}
                placeholder="empty"
                className="object-cover w-full h-full"
                priority
            />
        </div>
    );
}

export default memo(Image);
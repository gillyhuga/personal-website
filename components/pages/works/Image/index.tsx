import React, { memo } from "react";
import NextImage from "next/image";
import { ImageProps } from "@/types/works";

function Image({
    src,
    alt,
    className,
}: ImageProps) {
    return (
        <div className={`relative overflow-hidden ${className || ""}`}>
            <NextImage
                src={src || '/images/no-thumbnail.png'}
                alt={alt}
                fill={true}
                className="object-cover w-full h-full"
                priority
            />
        </div>
    );
}

export default memo(Image);

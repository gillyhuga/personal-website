import { StaticImageData } from "next/image";

export interface ImageProps {
    src: string ;
    alt: string;
    className?: string;
    blurDataURL?: string | StaticImageData;
}


export interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    url: string;
    tags?: string[];
}

export interface ProjectsProps {
    offset?: number;
    selectedTag?: string;
    dataProjects?: Project[];
}
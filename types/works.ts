export interface ImageProps {
    src: string;
    alt: string;
    className?: string;
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
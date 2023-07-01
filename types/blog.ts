import { PostType } from './post';

export type BlogType = {
    body: {
        date?: string;
        description?: string;
        image?: string;
        title: string;
    };
    slug: string;
};

export type BlogProps = {
    posts: PostType[];
};
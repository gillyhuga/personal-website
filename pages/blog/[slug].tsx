import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import Layout, { WEBSITE_HOST_URL } from '@/components/layout/BaseLayout';
import { MetaProps } from '@/types/layout';
import { PostPageProps } from '@/types/post';
import { postFilePaths, POSTS_PATH } from '@/utils/mdxUtils';
import AnimationLayout from '@/components/layout/AnimationLayout';

const components = {
    Head,
    Image,
    Link,
};


const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
    const customMeta: MetaProps = {
        title: `${frontMatter.title} - Gilly`,
        description: frontMatter.description,
        image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
        date: frontMatter.date,
        type: 'article',
    };

    return (
        <Layout customMeta={customMeta} >
            <div className="min-h-[calc(100vh-5rem)]">
                <article className="flex flex-col flex-1 h-full w-full max-w-3xl mx-auto pt-16 px-2 mb-6 md:pt-24 md:px-0">
                    <AnimationLayout>
                        <div className="flex flex-col space-y-2">
                            <h1 className="text-4xl md:text-6xl mt-4 md:mt-6 dark:text-white hover:underline">
                                {frontMatter.title}
                            </h1>
                            <p className="mb-10 text-sm text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>Gilly</span> | {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
                            </p>
                        </div>
                    </AnimationLayout>
                    <div className="prose text-justify dark:prose-dark max-w-full pt-4">
                        <MDXRemote {...source} components={components} />
                    </div>
                </article>
            </div>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
    const source = fs.readFileSync(postFilePath);

    const { content, data } = matter(source);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [require('remark-code-titles')],
            rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
        },
        scope: data,
    });

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = postFilePaths
        .map((path) => path.replace(/\.mdx?$/, ''))
        .map((slug) => ({ params: { slug } }));
    return {
        paths,
        fallback: false,
    };
};

export default PostPage;

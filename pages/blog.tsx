import React from 'react';
import BlogCard from '@/components/pages/blog/Card';
import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import { RoughNotation } from 'react-rough-notation';
import { getAllPosts } from '@/lib/api';
import { BlogProps } from '@/types/blog';
import Layout from '@/components/layout/BaseLayout';

export const Blog = ({ posts }: BlogProps): JSX.Element => {
    return (
        <Layout>
            <div className="pt-28 pb-4 w-full min-h-[calc(100vh-5rem)] text-lg">
                <div className="flex flex-col space-y-2">
                    <div className="whitespace-pre-line font-semibold sm:mx-0 text-5xl md:text-5xl xl:text-6xl" >
                        <RoughNotation type="underline" show strokeWidth={2} color="#999999">Blogs</RoughNotation>
                    </div>
                    <p className="text-xl text-secondary py-5">
                        I occasionally write about what work I&apos;ve been doing and share my thoughts on anything from technology to personal life.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    {posts.map((post, i) => (
                        <BlogCard
                            key={i}
                            body={{
                                date: format(parseISO(post.date), 'MMMM dd, yyyy'),
                                description: post.description,
                                image: post.image,
                                title: post.title
                            }}
                            slug={post.slug} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const posts = getAllPosts(['date', 'description', 'slug', 'title', 'image']);

    return {
        props: { posts },
    };
};

export default Blog;

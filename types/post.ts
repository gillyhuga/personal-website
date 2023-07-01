import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type PostType = {
  date?: string;
  description?: string;
  image?: string;
  slug: string;
  title: string;
};

export type PostItems = {
  [key: string]: string;
};

export type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};
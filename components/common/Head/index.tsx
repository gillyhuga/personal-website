import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { MetaProps } from '@/types/layout';

export const WEBSITE_HOST_URL = 'https://gillyhuga.xyz';

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
    const router = useRouter();
    const meta: MetaProps = {
        title: 'Gilly Huga Anargya | Frontend Engineer',
        description:'The personal site, writing and portfolio of Gilly Huga Anargya, a frontend engineer based in Indonesia.',
        image: `${WEBSITE_HOST_URL}/images/meta-image.png`,
        type: 'website',
        ...customMeta,
    };

    return (
        <NextHead>
            <title>{meta.title}</title>
            <meta content={meta.description} name="description" />
            <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
            <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
            <meta property="og:type" content={meta.type} />
            <meta property="og:site_name" content="Gilly Huga Anargya - Website" />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:image" content={meta.image} />
            {meta.date && (
                <meta property="article:published_time" content={meta.date} />
            )}
        </NextHead>
    );
};

export default Head;

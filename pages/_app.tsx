import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import React from 'react';
import '@/styles/globals.css';
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import { Analytics } from '@vercel/analytics/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
            <UserProvider>
            <Component {...pageProps} />
            </UserProvider>
      <Analytics />
    </ThemeProvider>
  );
};

export default MyApp;

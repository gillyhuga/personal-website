import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import React from 'react';
import '@/styles/globals.css';
import NavigationBar from '@/components/common/NavigationBar';
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import { Toaster } from 'react-hot-toast';

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-60 blur-2xl opacity-30 -mt-40  absolute w-full top-0 z-10"></div>
      <NavigationBar />
      <div><Toaster/></div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;

import React from 'react';
import Head from '@/components/common/Head';
import Footer from '@/components/common/Footer';
import { LayoutProps } from '@/types/layout';
import NavigationBar from '@/components/common/NavigationBar';
import { Toaster } from 'react-hot-toast';
export const WEBSITE_HOST_URL = 'https://gillyhuga.com';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-60 blur-2xl opacity-30 -mt-40  absolute w-full top-0 z-10"></div>
      <NavigationBar />
      <div><Toaster /></div>
      <div className="bg-white dark:bg-black transition-all flex flex-col min-h-screen">
        <div className="w-screen my-auto max-w-7xl mx-auto px-4 sm:px-6">
          <main>
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

import React from 'react';
import { MetaProps } from '@/types/layout';
import Head from '@/components/common/Head';
import NavigationBar from '@/components/common/NavigationBar';
import Footer from '@/components/common/Footer';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://gillyhuga.xyz';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <div className="bg-white dark:bg-black transition-all flex flex-col min-h-screen">
        <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-60 blur-2xl opacity-30 -mt-40  absolute w-full top-0 z-10"></div>
        <header>
          <NavigationBar />
        </header>
        <div className="w-screen my-auto max-w-7xl mx-auto px-4 sm:px-6">
          <main>
            {children}
          </main>
        </div>
        <footer >
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;

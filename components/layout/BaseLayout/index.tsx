import React from 'react';
import Head from '@/components/common/Head';
import Footer from '@/components/common/Footer';
import { LayoutProps } from '@/types/layout';

export const WEBSITE_HOST_URL = 'https://gillyhuga.com';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
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

import React from 'react';
import Contact from '@/components/pages/about/Contact';
import AboutMe from '@/components/pages/about/AboutMe';
import { RoughNotation } from 'react-rough-notation';
import Layout from '@/components/layout/BaseLayout';

export const About = (): JSX.Element => {
  return (
    <Layout>
      <div className=" pt-28 pb-4 w-full text-lg">
        <div className="whitespace-pre-line font-semibold sm:mx-0 text-4xl md:text-5xl xl:text-8xl" >
          <RoughNotation type="underline" show strokeWidth={2} padding={2} color="#999999">Gilly Huga Anargya</RoughNotation>
        </div>
        <AboutMe />
        <Contact />
      </div>
    </Layout>

  );
};

export default About;

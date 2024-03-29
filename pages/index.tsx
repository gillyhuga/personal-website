import Layout from "@/components/layout/BaseLayout";
import { RoughNotation } from "react-rough-notation";

export const Home = (): JSX.Element => {
  return (
    <Layout>
      <div className="whitespace-pre-line text-center sm:text-left sm:mx-0 font-bold text-3xl sm:text-4xl md:text-7xl lg:text-7xl xl:text-9xl" >
        <h1>
          Hi! I&apos;m <RoughNotation type="circle" show strokeWidth={2} padding={5} color="#999999">Gilly,</RoughNotation><br />
          a&nbsp;
          <span className=" background-animate bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            Frontend Engineer
          </span>
        </h1>
      </div>
    </Layout>
  );
}

export default Home;
import { RoughNotation } from "react-rough-notation";

export const Home = (): JSX.Element => {
  return (
    <div className="whitespace-pre-line sm:mx-0 font-bold text-4xl md:text-7xl xl:text-9xl" >
      Hi! I&apos;m <RoughNotation type="circle" show strokeWidth={2} padding={5} color="#999999">Gilly,</RoughNotation><br />
      a&nbsp;
      <span className="background-animate bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
        Frontend Engineer
      </span>
    </div>
  );
}

export default Home;
import tw from "tailwind-styled-components";

const SectionContainer = tw.section`md:h-[60vh] md:mt-[120px] max-sm:h-[750px] max-sm:py-[400px] justify-center items-center flex`;
const HeroContent = tw.div`hero-content w-[90%] sm-w-[95%] md-w-[95%] lg-w-[80%] z-10`;
const H1 = tw.h1`max-sm:text-7xl sm:text-5xl md:text-8xl text-center text-amber-50 block mx-auto sm:w-[100%]`;
const P = tw.p`text-center text-amber-50 text-3xl mt-2.5`;
const ButtonPrimary = tw.button`bg-[#fb4322] w-[200px] mr-2 text-white rounded-full py-5 px-4 shadow-[#7f1604] shadow-2xl`;
const ButtonSecondary = tw.button`border-3 border-[#fb4322] w-[200px] text-[#fb4322] rounded-full py-5 px-4 shadow-[#7f1604] shadow-2xl`;
export { SectionContainer, HeroContent, H1, P, ButtonPrimary, ButtonSecondary };
// export default SectionContainer;
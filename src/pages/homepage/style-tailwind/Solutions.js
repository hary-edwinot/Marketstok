import tw from "tailwind-styled-components";

const SolutionContainer = tw.section`md:h-[600px] flex justify-center items-center max-sm:py-[50px] max-sm:px-3`
const SolutionContent = tw.div`flex flex-col md:flex-row justify-between md:gap-10 md:w-[80%]`
const H2 = tw.h2`text-6xl font-bold text-amber-50`
const H3 = tw.h3`text-4xl text-amber-50 mb-4`
const P = tw.p`text-amber-50 text-2xl`

export { SolutionContainer, SolutionContent, H2, H3, P };
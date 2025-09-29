import tw from "tailwind-styled-components";

const OfferSection = tw.section`md:w-[80%] mx-auto my-20 md:my-40`;
const H2 = tw.h2`md:text-6xl text-center mb-10`;
const Button = tw.button`
    uppercase text-amber-50 
    ${(p) => p.$abonmentSelected ? 'bg-amber-50 text-black' : ''} 
    cursor-pointer 
    py-[2px] 
    text-[13px] 
    px-4 h-[45px] 
    rounded-[10px] 
    w-[110px] 
    flex 
    items-center 
    justify-center`;
const CardContainer = tw.div`md:grid md:grid-cols-3 md:gap-10 mt-20 max-sm:grid max-sm:grid-cols-1 max-sm:gap-6`;
const Card = tw.div`border-[#ffffff40] border-1 p-6 rounded-[15px] mb-10 min:h-[500px] relative`
const Pgray = tw.p`text-gray-400 text-[14px]`
const Price = tw.span`text-5xl font-bold mt-5 inline-block`
const ButtonCTA = tw.button`
    ${p => p.color === 'amber' ? 'bg-amber-300' : p.color === 'fuchsia' ? 'bg-fuchsia-400' : p.color === 'orange' ? 'bg-orange-400' : ''}
    text-black font-bold py-4 px-4 rounded mt-6 w-[100%] cursor-pointer
`;
const H4 = tw.h4`
${(p) => p.color === 'amber' ? 'text-amber-300 text-2xl mb-2 font-bold' : p.color === 'fuchsia' ? 'text-fuchsia-400 text-2xl mb-2 font-bold' : p.color === 'orange' ? 'text-orange-400 text-2xl mb-2 font-bold' : ''}`

const DivBlur = tw.div`
${(p)=> p.bg === 'rgba(251,226,34,0.11)' ? 'bg-[rgba(251,226,34,0.11)] blur-[80px] z-[-1] h-[600px] w-full absolute top-0 left-0' 
        : p.bg === 'rgba(153,34,251,0.24)' ? 'bg-[rgba(153,34,251,0.24)] blur-[80px] z-[-1] h-[600px] w-full absolute top-0 left-0' 
        : p.bg === 'rgba(251,106,34,0.14)' ? 'bg-[rgba(251,106,34,0.14)] blur-[80px] z-[-1] h-[600px] w-full absolute top-0 left-0' : ''}
`

export { OfferSection, H2, Button, CardContainer, Card, Pgray, Price, ButtonCTA, H4, DivBlur }
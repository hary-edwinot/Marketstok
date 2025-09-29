import tw from "tailwind-styled-components";

const NavbarContainer = tw.header`
        flex 
        justify-center 
        items-center 
        py-4 fixed 
        left-0 
        right-0 
        top-0 
        h-20 bg-[#121117] 
        z-20 
        md:w-full 
        sm:w-full
`;
const Nav = tw.nav`text-amber-50 flex justify-between w-[90%]`
const Div = tw.div`flex justify-between w-3xl`
const ListNav = tw.ul`flex justify-evenly items-center w-[100%]`

export { NavbarContainer, Nav, Div, ListNav };
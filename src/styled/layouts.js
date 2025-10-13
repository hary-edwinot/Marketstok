import tw from "tailwind-styled-components";


const Container = tw.section`
    mx-auto 
    grid 
    gap-4 
    md:grid-cols-[250px_1fr]
    min-h-[100vh]
    bg-[#FAFAFA]
    `;

const SidebarContainer = tw.aside`
    relative
    `;

const MainContainer = tw.main`

       `;

const OutletContainer = tw.div`
    bg-[red]
    h-full
    mt-5
    mr-3
    p-5
    rounded-[20px]
    border-[1px]
    border-[#E0E0E0]
    bg-[white]
    `;

export { Container, SidebarContainer, MainContainer, OutletContainer };
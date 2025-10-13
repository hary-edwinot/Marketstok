import tw from "tailwind-styled-components";


const NavContainer = tw.div`
    mx-auto 
    h-[80px]
    flex
    items-center
    justify-between
    mt-4
    px-1
    absolute
    bottom-0
    w-full
    bt-1
    border-[#E0E0E0]
    `;

const SearchInput = tw.div`
    flex
    justify-between
     border
     rounded-lg
     border-[#E0E0E0]
     width[800px]
    `;

const SearchInputField = tw.input`
    p-2
    rounded-lg
    w-full
    h-[40px]
    outline-none
    `;

const Avatar = tw.div`
    w-10
    h-10
    rounded-full
    bg-[#F2F2F2]
    `;

const MenuContainer = tw.div`
    flex
    bg-[red]
    space-x-6
    absolute
    top-[-150px]
    w-full
    flex-col
    border
    border-[#E0E0E0]
    bg-[white]
    rounded-[10px]
    overflow-hidden
    z-10
    `;

const MenuItem = tw.div`
    text-sm
    text-[#333]
    hover:bg-[#E0E0E0]
    cursor-pointer
    w-full
    h-[50px]
    flex
    items-center
    border-b
    border-[#E0E0E0]
    pl-4
    `;

export { NavContainer, SearchInput, SearchInputField, Avatar, MenuItem, MenuContainer };
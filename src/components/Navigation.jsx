import { NavContainer, SearchInput, SearchInputField, Avatar, MenuContainer, MenuItem } from "../styled/navigation";
import { Search, BellRing, UserRoundPen, LogOut, Cog } from 'lucide-react';
import { textGray } from "../utils/color";
import { useState } from "react";


const Menu = ({ isOpen }) => {
    return isOpen && (
        <MenuContainer>
            <MenuItem><UserRoundPen className="mr-3" size='19px' />Modifier mon profil</MenuItem>
            <MenuItem><Cog className="mr-3" size='19px' />Paramètres</MenuItem>
            <MenuItem><LogOut className="mr-3" size='19px' />Se déconnecter</MenuItem>
        </MenuContainer>
    );
};


export const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <NavContainer>
            {/* <SearchInput>
                <Search className="m-2" color={textGray} />
                <SearchInputField type="text" />
            </SearchInput> */}

            {/* <BellRing color={textGray} /> */}
            <div className="flex items-center relative w-full">
                <div
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center space-x-3 cursor-pointer border-t-1 py-3 border-transparent w-full border-t-[#e0e0e0c1] px-2" >
                    <Avatar />
                    <div >
                        <span className="text-sm font-medium">Jhon Doe Cavani</span>
                        <br />
                        <span className="text-xs text-gray-500">Admin</span>
                    </div>
                </div>
                <Menu isOpen={isMenuOpen} />
            </div>
        </NavContainer>
    );
};

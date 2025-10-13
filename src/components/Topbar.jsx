import { SearchInput, SearchInputField } from "../styled/navigation";
import { Search, BellRing, UserRoundPlus } from 'lucide-react';
import { textGray } from "../utils/color";
import tw from "tailwind-styled-components";


const ButtonContainer = tw.span`
    rounded
    rounded-[10px]
    flex
    items-center
    pl-4
    cursor-pointer
    flex items-center
`;

const Separator = tw.span`
    h-[40px]
    w-[2px] 
    bg-[#f0f0f0]
    inline-block
    ml-4
`;


const Topbar = ({ border }) => {
    return (
        <div className={`${border} h-[60px] flex items-center justify-between px-4 bg-white rounded-[15px] border-[1px] border-[#E0E0E0] py-9 mr-3 mt-3`}>
            <SearchInput>
                <Search className="m-2" color={textGray} />
                <SearchInputField type="text" />
            </SearchInput>
            <div className="flex items-center">
                <ButtonContainer>
                    <UserRoundPlus color={textGray} />
                </ButtonContainer>
                <Separator />
                <ButtonContainer>
                    <BellRing color={textGray} />
                    <span className="ml-2 bg-amber-300 h-[20px] w-[20px] rounded-full flex items-center justify-center text-[12px] font-semibold">5</span>
                </ButtonContainer>
            </div>

        </div>
    );
};

export default Topbar;
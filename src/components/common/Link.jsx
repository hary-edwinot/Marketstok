import { NavLink } from "react-router";
import ButtonContainer from "../../styled/components/Button";


const Link = ({ name, icon, color, size, to, width, backgroundColor, margin, ...props }) => {
    const styleInline = `
                        ${backgroundColor ? `bg-[${backgroundColor}]  hover:bg-[${backgroundColor}]` : 'bg-[#F2F2F2]'}
                        hover:opacity-80
                        ${color ? `text-[${color}]` : 'text-[#7A7B7D]'}
                        ${width === "small" ? "w-20" : width === "medium" ? "w-32" : width === "large" ? "w-48" : width === "full" ? "w-full" : "w-auto"}
                        ${margin ? `m-[${margin}]` : "my-1"}
                        ${size === "small" ? "p-2 text-sm" : size === "medium" ? "p-3 text-md" : size === "large" ? "p-4 text-lg" : "p-2 text-md"}
                        `;


    return (
        <NavLink to={to || '#'} className='navigation-active'>
            <ButtonContainer
                {...props}
                className={`${styleInline} active-link`}
            >
                {icon && <span className="mr-3">{icon}</span>}
                <span>{name}</span>

            </ButtonContainer>
        </NavLink>
    );
};

export default Link;
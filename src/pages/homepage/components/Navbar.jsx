import { NavbarContainer, Nav, Div, ListNav } from "../style-tailwind/Navbar";
import { NavLink } from "react-router";
const Navbar = () => {
    return (
        <NavbarContainer>
            <Nav>
                <NavLink to="/" id='Logo'>Marketstok</NavLink>
                <Div>
                    {/* <button>Menu</button> */}
                    <ListNav>
                        <li>
                            <a className="nav-link active" aria-current="page" href="#solutions">Gagner du temps</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#dashboard">Dashboard intelligent</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#faq">Questions fréquentes</a>
                        </li>
                        <li className='ml-5'>
                            <NavLink to="/login" className='text-amber-50 cursor-pointer rounded-[50px] bg-[#fb4322] p-3 '>Se connecter</NavLink>
                        </li>
                    </ListNav>
                </Div>
            </Nav>
        </NavbarContainer>
    )
}

export default Navbar;
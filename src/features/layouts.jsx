import { Container, SidebarContainer, MainContainer,OutletContainer } from "../styled/layouts";
import { Outlet } from 'react-router-dom'
import { Sidebar } from "../components/Sidebar";
import { Navigation } from "../components/Navigation";
import Topbar from "../components/Topbar";

import { borderGray } from "../utils/color";

const Layout = () => {
    return (
        <Container>
            <SidebarContainer border={borderGray}>
                <Sidebar />
                <Navigation />
            </SidebarContainer>
            <MainContainer>
                <Topbar border={borderGray} />
                <OutletContainer>
                    <Outlet />
                </OutletContainer>
            </MainContainer>
        </Container>
    );
};

export default Layout;
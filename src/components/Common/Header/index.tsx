import React from "react";
import { AppBar, Toolbar, Box, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import useAuth from "../../../hooks/useAuth";
import HamburgerMenu from "./HamburgerMenu";
import BrandLink from "./BrandLink";
import NavigationLinks from "./NavigationLinks";
import ThemeToggleButton from "../ThemeToggleBtn";
import UserMenu from "./UserMenu";
import LoginSignupButtons from "./LoginSignupButtons";

const HeaderContainer = styled(AppBar)`
    position: sticky;
    top: 0;
    z-index: 500;
    background-color: ${({ theme }) => theme.palette.background.paper} !important;
`;

const Header: React.FC = () => {
    const { authData } = useAuth();
    const isBigScreen = useMediaQuery("(min-width:600px)");

    return (
        <HeaderContainer>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 3 }}>
                    {!isBigScreen && <HamburgerMenu />}
                    <BrandLink />
                    {isBigScreen && <NavigationLinks />}
                </Box>
                <ThemeToggleButton />
                {isBigScreen ? authData ? <UserMenu /> : <LoginSignupButtons /> : null}
            </Toolbar>
        </HeaderContainer>
    );
};

export default Header;

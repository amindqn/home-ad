import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Button,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    Box,
} from "@mui/material";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import useAuthApi from "../../api/authApi";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import ThemeToggleButton from "./ThemeToggleBtn";

const HeaderContainer = styled(AppBar)`
    position: sticky;
    top: 0;
    z-index: 500;
    background-color: ${({ theme }) =>
        theme.palette.background.paper} !important;
`;

const BrandLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.primary} !important;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`;

const Header: React.FC = () => {
    const { authData } = useAuth();
    const navigate = useNavigate();
    const { logout } = useAuthApi();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleLogout = async () => {
        logout()
            .then(() => navigate("/"))
            .catch((err) => console.log("logout error: ", err));
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <HeaderContainer>
            <Toolbar>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <IconButton
                            edge="start"
                            aria-label="menu"
                            onClick={() => navigate("/")}
                        >
                            <HomeIcon fontSize="large" />
                        </IconButton>
                        <BrandLink to="/">Real Estate App</BrandLink>
                    </Typography>
                    <Typography>
                        <BrandLink to="/about">About us</BrandLink>
                    </Typography>
                    <Typography>
                        <BrandLink to="/contact">Contact us</BrandLink>
                    </Typography>
                </Box>
                <ThemeToggleButton />
                {authData ? (
                    <>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            sx={{ borderRadius: "8px" }}
                        >
                            <Typography style={{ marginRight: 10 }}>
                                {authData.username}
                            </Typography>
                            <AccountCircleIcon fontSize="large" />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            style={{ marginTop: 40 }}
                        >
                            <MenuItem onClick={() => navigate("/dashboard")}>
                                Dashboard
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </>
                ) : (
                    <>
                        <Button
                            sx={{ fontWeight: "bold" }}
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </Button>
                        <Button
                            sx={{ fontWeight: "bold" }}
                            onClick={() => navigate("/signup")}
                        >
                            Signup
                        </Button>
                    </>
                )}
            </Toolbar>
        </HeaderContainer>
    );
};

export default Header;

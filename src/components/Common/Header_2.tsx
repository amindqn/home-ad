import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, useMediaQuery, Drawer, List, ListItem, ListItemText } from "@mui/material";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import ThemeToggleButton from "./ThemeToggleBtn";
import useAuth from "../../hooks/useAuth";
import useAuthApi from "../../api/authApi";

const HeaderContainer = styled(AppBar)`
    position: sticky;
    top: 0;
    z-index: 500;
    background-color: ${({ theme }) => theme.palette.background.paper} !important;
`;

const BrandLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.primary} !important;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`;

const RowCol = styled.div`
    display: flex;
    flex-direction: ${(props) => props.dir ?? "row"};
    align-items: center;
`;

const Header: React.FC = () => {
    const { authData } = useAuth();
    const navigate = useNavigate();
    const { logout } = useAuthApi();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const isBigScreen = useMediaQuery("(min-width:600px)");

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

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const drawerList = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem
                    button
                    onClick={() => navigate("/")}
                >
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem
                    button
                    onClick={() => navigate("/about")}
                >
                    <ListItemText primary="About us" />
                </ListItem>
                <ListItem
                    button
                    onClick={() => navigate("/contact")}
                >
                    <ListItemText primary="Contact us" />
                </ListItem>
                {authData ? (
                    <>
                        <ListItem
                            button
                            onClick={() => navigate("/dashboard")}
                        >
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={handleLogout}
                        >
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </>
                ) : (
                    <>
                        <ListItem
                            button
                            onClick={() => navigate("/login")}
                        >
                            <ListItemText primary="Login" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => navigate("/signup")}
                        >
                            <ListItemText primary="Signup" />
                        </ListItem>
                    </>
                )}
            </List>
        </Box>
    );

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
                    {!isBigScreen && (
                        <IconButton
                            edge="start"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    )}
                    <IconButton
                        edge="start"
                        aria-label="home"
                        onClick={() => navigate("/")}
                    >
                        <HomeIcon fontSize="large" />
                    </IconButton>
                    {isBigScreen && (
                        <>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <BrandLink to="/">Real Estate App</BrandLink>
                            </Typography>
                            <Typography>
                                <BrandLink to="/about">About us</BrandLink>
                            </Typography>
                            <Typography>
                                <BrandLink to="/contact">Contact us</BrandLink>
                            </Typography>
                        </>
                    )}
                </Box>
                <ThemeToggleButton />
                {isBigScreen && authData ? (
                    <>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            sx={{ borderRadius: "8px" }}
                        >
                            <Typography style={{ marginRight: 10 }}>{authData.username}</Typography>
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
                            <MenuItem onClick={() => navigate("/dashboard")}>Dashboard</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </>
                ) : null}
            </Toolbar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {drawerList()}
            </Drawer>
        </HeaderContainer>
    );
};

export default Header;

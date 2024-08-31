import React, { useState } from "react";
import { IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAuthApi from "../../../api/authApi";
import styled from "styled-components";

const GlassyDrawer = styled(Drawer)`
    .MuiDrawer-paper {
        backdrop-filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent white */
        box-shadow: 0 4px 30px rgba(56, 56, 56, 0.1);
        border-radius: 0 10px 10px 0;
        padding: 20px;
        width: 50%;
    }
`;

const HamburgerMenu: React.FC = () => {
    const { authData } = useAuth();
    const navigate = useNavigate();
    const { logout } = useAuthApi();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const handleLogout = async () => {
        await logout();
        navigate("/");
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
        <>
            <IconButton
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon fontSize="large" />
            </IconButton>
            <GlassyDrawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {drawerList()}
            </GlassyDrawer>
        </>
    );
};

export default HamburgerMenu;

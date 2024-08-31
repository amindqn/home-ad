import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAuthApi from "../../../api/authApi";


const UserMenu: React.FC = () => {
    const { authData } = useAuth();
    const navigate = useNavigate();
    const { logout } = useAuthApi();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };

    return (
        <>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                sx={{ borderRadius: "8px" }}
            >
                <Typography style={{ marginRight: 10 }}>{authData?.username}</Typography>
                <AccountCircleIcon fontSize="large" />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{ marginTop: 40 }}
            >
                <MenuItem onClick={() => navigate("/dashboard")}>Dashboard</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default UserMenu;

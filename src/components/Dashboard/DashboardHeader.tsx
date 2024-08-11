import React from "react";
import { Box, Button, Avatar, Typography } from "@mui/material";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Header = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
`;

const AvatarContainer = styled(Box)`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const DashboardHeader: React.FC = () => {
    const { authData } = useAuth();
    const navigate = useNavigate();

    return (
        <Header>
            <AvatarContainer>
                {/* <Avatar>{authData?.username.charAt(0)}</Avatar> */}
                <AccountBoxIcon fontSize="large"/>
                <Typography variant="h6">{authData?.username}</Typography>
            </AvatarContainer>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/post-ad")}
            >
                Post New Ad
            </Button>
        </Header>
    );
};

export default DashboardHeader;

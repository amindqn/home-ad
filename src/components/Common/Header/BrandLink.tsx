import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, IconButton, useMediaQuery } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.primary} !important;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`;

const BrandLink: React.FC = () => {
    const navigate = useNavigate();
    const isBigScreen = useMediaQuery("(min-width:600px)");

    return (
        <Typography
            variant="h6"
            component="div"
            sx={{ display: "flex", alignItems: "center" }}
        >
            <IconButton
                edge="start"
                aria-label="home"
                onClick={() => navigate("/")}
            >
                <HomeIcon fontSize="large" />
            </IconButton>
            {isBigScreen && <StyledLink to="/">Real Estate App</StyledLink>}
        </Typography>
    );
};

export default BrandLink;

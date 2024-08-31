import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.primary} !important;
    &:hover {
        text-decoration: underline;
    }
`;

const NavigationLinks: React.FC = () => {
    return (
        <>
            <Typography>
                <StyledLink to="/about">About us</StyledLink>
            </Typography>
            <Typography>
                <StyledLink to="/contact">Contact us</StyledLink>
            </Typography>
        </>
    );
};

export default NavigationLinks;

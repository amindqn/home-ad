import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";

const StyledIconButton = styled(IconButton)`
    position: sticky !important;
    left: 0;
    top: 70px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    &:hover {
        background-color: ${({ theme }) => theme.palette.primary.dark};
    }
`;

const BackButton: React.FC = () => {
    const navigate = useNavigate();
    const isBigScreen = useMediaQuery("(min-width:600px)");

    const handleBack = () => {
        navigate(-1);
    };

    return isBigScreen ? (
        <StyledIconButton onClick={handleBack}>
            <ArrowBackIcon />
        </StyledIconButton>
    ) : null;
};

export default BackButton;

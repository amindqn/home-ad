import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "styled-components";

const StyledIconButton = styled(IconButton)`
    position: sticky;
    left: 0;
    top: 0;
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    &:hover {
        background-color: ${({ theme }) => theme.palette.primary.dark};
    }
`;

const BackButton: React.FC = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <StyledIconButton onClick={handleBack}>
            <ArrowBackIcon />
        </StyledIconButton>
    );
};

export default BackButton;

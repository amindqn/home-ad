import React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import styled from "styled-components";
import useTheme from "../../hooks/useThem";

const ToggleButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ThemeToggleButton: React.FC = () => {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <ToggleButtonContainer>
            <IconButton
                sx={{ ml: 1 }}
                onClick={toggleTheme}
            >
                {isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </ToggleButtonContainer>
    );
};

export default ThemeToggleButton;

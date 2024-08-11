import React, { createContext, useState, ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";

export interface ThemeContextProps {
    isDarkTheme: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
    undefined
);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    const currentTheme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            <MuiThemeProvider theme={currentTheme}>
                <CssBaseline />
                <StyledThemeProvider theme={currentTheme}>
                    {children}
                </StyledThemeProvider>
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

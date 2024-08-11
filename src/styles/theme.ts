// styles/theme.ts
import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material";

export const lightTheme: Theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#478CCF",
        },
        secondary: {
            main: "#03dac6",
        },
        background: {
            default: "#f5f5f5",
            paper: "#ffffff",
        },
        text: {
            primary: "#000000",
            secondary: "#616161",
        },
    },
    typography: {
        fontFamily: "Roboto, Arial, sans-serif",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                },
            },
        },
    },
});

export const darkTheme: Theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#37B7C3",
        },
        secondary: {
            main: "#5B99C2",
        },
        background: {
            default: "#121212",
            paper: "#1d1d1d",
        },
        text: {
            primary: "#ffffff",
            secondary: "#b0b0b0",
        },
    },
    typography: {
        fontFamily: "Roboto, Arial, sans-serif",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                },
            },
        },
    },
});

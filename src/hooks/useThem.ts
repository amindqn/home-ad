import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../contexts/ThemeContex";

const useTheme = () => {
    const context = useContext(ThemeContext) as ThemeContextProps;
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export default useTheme;

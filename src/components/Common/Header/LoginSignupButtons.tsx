import React from "react";
import { Button, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RowCol = styled.div`
    display: flex;
    flex-direction: ${(props) => props.dir ?? "row"};
    align-items: center;
`;

const LoginSignupButtons: React.FC = () => {
    const navigate = useNavigate();
    const isBigScreen = useMediaQuery("(min-width:600px)");

    return (
        <RowCol dir={isBigScreen ? "row" : "column"}>
            <Button
                sx={{ fontWeight: "bold"}}
                onClick={() => navigate("/login")}
            >
                Login
            </Button>
            <Button
                sx={{ fontWeight: "bold"}}
                onClick={() => navigate("/signup")}
            >
                Signup
            </Button>
        </RowCol>
    );
};

export default LoginSignupButtons;

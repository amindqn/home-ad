import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import { Box } from "@mui/material";
import styled from "styled-components";

const Container = styled(Box)`
    padding: 16px;
    background-color: ${({ theme }) => theme.palette.background.paper};
    width: 50%;
    min-width: 400px;
    margin: auto;
    margin-top: 60px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Login: React.FC = () => {
    return (
        <Container>
            <LoginForm />
        </Container>
    );
};

export default Login;

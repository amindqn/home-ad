import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import { Box } from "@mui/material";
import styled from "styled-components";

const Container = styled(Box)`
    padding: 16px;
`;

const Login: React.FC = () => {
    return (
        <Container>
            <LoginForm />
        </Container>
    );
};

export default Login;

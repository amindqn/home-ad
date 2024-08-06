import React, { useState, useContext } from "react";
import { login } from "../../api/authApi";
import { Button, TextField, Box } from "@mui/material";
import styled from "styled-components";
import { AuthContextProps } from "../../types/authTypes";
import { AuthContext } from "../../contexts/AuthContex";
import { useNavigate } from "react-router-dom";

const FormContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 400px;
    margin: auto;
    padding: 16px;
`;

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthData } = useContext(AuthContext) as AuthContextProps;
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = await login(email, password);
        setAuthData(data);
        navigate("/dashboard");
    };

    return (
        <FormContainer>
            <h2>Login</h2>
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
            >
                Login
            </Button>
        </FormContainer>
    );
};

export default LoginForm;

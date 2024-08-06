import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/authApi";
import { Button, TextField, Box } from "@mui/material";
import styled from "styled-components";

const FormContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 400px;
    margin: auto;
    padding: 16px;
`;

const SignupForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        await signup(email, password);
        navigate("/login");
    };

    return (
        <FormContainer>
            <h2>Signup</h2>
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
                onClick={handleSignup}
            >
                Signup
            </Button>
        </FormContainer>
    );
};

export default SignupForm;

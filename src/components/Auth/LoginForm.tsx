import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, Box } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useAuthApi from "../../api/authApi";
import loginSchema from "../../formsSchema/loginSchema";



const FormContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 400px;
    margin: auto;
    padding: 16px;
`;

interface IFormInput {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuthApi();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        login(data.email, data.password)
            .then(() => navigate("/dashboard"))
            .catch((err) => cl("Login failed", err));
    };

    return (
        <FormContainer
            component="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2>Login</h2>
            <TextField
                label="Email"
                fullWidth
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
            />
            <TextField
                label="Password"
                type="password"
                fullWidth
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
            >
                Login
            </Button>
        </FormContainer>
    );
};

export default LoginForm;

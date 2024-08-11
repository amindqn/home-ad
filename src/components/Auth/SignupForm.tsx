import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Box } from "@mui/material";
import styled from "styled-components";
import useAuthApi from "../../api/authApi";
import signupSchema from "../../formsSchema/signupSchema";

const FormContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 400px;
    margin: auto;
    padding: 16px;
`;



const SignupForm: React.FC = () => {
    const { signup } = useAuthApi();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        resolver: yupResolver(signupSchema),
    });

    const onSubmit = async (data:any) => {
        try {
            await signup(data.email, data.password, data.username, data.phone);
            navigate("/login");
        } catch (error: any) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.message === "Username already exists"
            ) {
                setError("username", {
                    type: "manual",
                    message: "Username already exists",
                });
            }
        }
    };

    return (
        <FormContainer
            component="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2>Signup</h2>
            <TextField
                label="Email"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
            />
            <TextField
                label="Username"
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
                fullWidth
            />
            <TextField
                label="Phone (Optional)"
                {...register("phone")}
                error={!!errors.phone}
                helperText={errors.phone?.message}
                fullWidth
            />
            <TextField
                label="Password"
                type="password"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
            />
            <TextField
                label="Confirm Password"
                type="password"
                {...register("confirmPassword")}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                fullWidth
            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
            >
                Signup
            </Button>
        </FormContainer>
    );
};

export default SignupForm;

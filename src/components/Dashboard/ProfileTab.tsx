import React, { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import styled from "styled-components";
import { FieldError, FieldErrorsImpl, Merge, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "../../hooks/useAuth";
import { useMutation, useQueryClient } from "react-query";
import { basicSchema, combinedSchema } from "../../formsSchema/profileSchema";
import useAuthApi from "../../api/authApi";

const ProfileContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

interface BasicFormFields {
    username: string;
    phone?: string;
}

interface PasswordFormFields extends BasicFormFields {
    password: string;
    confirmPassword: string;
}

const ProfileTab: React.FC = () => {
    const { authData } = useAuth();
    const { updateUser } = useAuthApi();
    const queryClient = useQueryClient();

    const [editPassword, setEditPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>({
        defaultValues: {
            username: authData?.username || "",
            phone: authData?.phone || "",
            ...(editPassword && {
                password: "",
                confirmPassword: "",
            }),
        },
        resolver: yupResolver(editPassword ? combinedSchema : basicSchema),
    });

    const mutation = useMutation(
        (updatedData: BasicFormFields | PasswordFormFields) =>
            updateUser(authData?.id, updatedData),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("authData");
            },
        }
    );

    const onSubmit = (data: PasswordFormFields | BasicFormFields) => {
        const { confirmPassword, ...dataToSend } = data as any;

        if (!editPassword && dataToSend.password) {
            delete dataToSend.password;
        }

        mutation.mutate(dataToSend);
    };

    const hasPasswordFields = (data: any): data is PasswordFormFields => {
        return "password" in data && "confirmPassword" in data;
    };

    const getErrorMessage = (
        error:
            | string
            | FieldError
            | Merge<FieldError, FieldErrorsImpl<any>>
            | undefined
    ): string | undefined => {
        if (typeof error === "string") {
            return error;
        } else if (error && typeof error.message === "string") {
            return error.message;
        }
        return undefined;
    };

    return (
        <ProfileContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register("username")}
                    label="Username"
                    fullWidth
                    margin="normal"
                    error={!!errors.username}
                    helperText={getErrorMessage(errors.username)}
                />
                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={authData?.email}
                    disabled
                />
                <TextField
                    {...register("phone")}
                    label="Phone"
                    fullWidth
                    margin="normal"
                    error={!!errors.phone}
                    helperText={getErrorMessage(errors.phone)}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={editPassword}
                            onChange={(e) => setEditPassword(e.target.checked)}
                        />
                    }
                    label="Edit Password"
                />
                {editPassword && (
                    <>
                        <TextField
                            {...register("password")}
                            label="New Password"
                            type="password"
                            fullWidth
                            margin="normal"
                            error={!!errors.password}
                            helperText={getErrorMessage(errors.password)}
                        />
                        <TextField
                            {...register("confirmPassword")}
                            label="Confirm Password"
                            type="password"
                            fullWidth
                            margin="normal"
                            error={!!errors.confirmPassword}
                            helperText={getErrorMessage(errors.confirmPassword)}
                        />
                    </>
                )}
                <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                >
                    Update Profile
                </Button>
            </form>
        </ProfileContainer>
    );
};

export default ProfileTab;

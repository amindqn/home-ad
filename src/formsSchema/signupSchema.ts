import * as yup from "yup";
import api from "../api/axiosInstance";
import { AuthData } from "../types/authTypes";


export default yup
    .object({
        email: yup
            .string()
            .email("Invalid email format")
            .required("Email is required"),
        username: yup
            .string()
            .required("Username is required")
            .test(
                "unique-username",
                "Username already exists",
                async (value) => {
                    const response = await api.get(`/users`);
                    const exactMatch = response.data.find(
                        (user: AuthData) => user.username === value
                    );
                    return !exactMatch;
                }
            ),
        phone: yup
            .string()
            .nullable()
            // .matches(/^[0-9]{11}$/, "Phone number is not valid")
            .optional(),
        password: yup
            .string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters long")
            .matches(
                /[A-Z]/,
                "Password must contain at least one uppercase letter"
            )
            .matches(
                /[a-z]/,
                "Password must contain at least one lowercase letter"
            )
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(
                /[@$!%*?&#]/,
                "Password must contain at least one special character"
            ),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Passwords must match"),
    })
    .required();

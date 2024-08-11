import * as yup from "yup";

export const basicSchema = yup.object().shape({
    username: yup.string(),
    phone: yup.string(),
});

export const passwordSchema = yup.object().shape({
    password: yup
        .string()
        .nullable()
        .min(8, "Password must be at least 8 characters long")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(
            /[@$!%*?&#]/,
            "Password must contain at least one special character"
        ),
    confirmPassword: yup
        .string()
        .nullable()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const combinedSchema = basicSchema.concat(passwordSchema);

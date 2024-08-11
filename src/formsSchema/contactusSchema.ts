import * as yup from "yup"

export default yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup
        .string()
        .required("Message is required")
        .min(20, "Message must be at least 20 characters long"),
});
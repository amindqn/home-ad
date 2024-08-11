import * as yup from "yup"
import { Ad } from "../types/adTypes";


export default yup.object<Partial<Ad>>().shape({
    title: yup.string().required("Title is required"),
    address: yup.string().required("Address is required"),
    phone: yup
        .string()
        .required("Phone number is required")
        .matches(
            /^(\+\d{1,3}[- ]?)?\d{11}$/,
            "Phone number is not valid, should be 10 digits"
        ),
    description: yup.string().notRequired(),
    location: yup
        .array()
        .of(yup.number().required("Location coordinates are required"))
        .length(2, "Location must be a tuple of [latitude, longitude]")
        .required("Location is required"),
});

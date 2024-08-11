import React from "react";
import styled from "styled-components";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactusSchema from "../formsSchema/contactusSchema";
import useContactUsApi from "../api/contactusApi";

const ContactContainer = styled(Box)`
    max-width: 600px;
    margin: auto;
    padding: 24px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;


interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

const ContactUsPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: yupResolver(contactusSchema),
    });
    const { sendContactForm } = useContactUsApi();

    const onSubmit = (data: ContactFormData) => {
        sendContactForm(data);
    };

    return (
        <ContactContainer>
            <Typography
                variant="h4"
                gutterBottom
            >
                Contact Us
            </Typography>
            <Typography
                variant="body1"
                paragraph
            >
                If you have any questions or need further information, feel free
                to contact us by filling out the form below.
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Name"
                    fullWidth
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                    {...register("message")}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Send Message
                </Button>
            </Form>
        </ContactContainer>
    );
};

export default ContactUsPage;

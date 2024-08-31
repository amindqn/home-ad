import React from "react";
import styled from "styled-components";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactusSchema from "../formsSchema/contactusSchema";
import useContactUsApi from "../api/contactusApi";
import ContactUsImg from "../assets/contact-us.png";

const ContactContainer = styled(Box)`
    max-width: 900px;
    margin: auto;
    padding: 24px;
    text-align: center;
    perspective: 1000px;
`;

const ContactContent = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 32px;
    border-radius: 16px;
    box-shadow: ${({ theme }) => (theme.palette.mode === "dark" ? "0 5px 40px rgba(120, 120, 120, 0.244)" : "0 20px 40px rgba(0, 0, 0, 0.15)")};
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    &:hover {
        box-shadow: ${({ theme }) => (theme.palette.mode === "dark" ? "0 20px 60px rgba(167, 167, 167, 0.405)" : "0 30px 60px rgba(0, 0, 0, 0.3)")};
        transform: translateY(-10px);
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;

const ContactImage = styled.img`
    width: 100%;
    max-width: 400px;
    margin: 16px auto;
    border-radius: 16px;
    box-shadow: ${({ theme }) => (theme.palette.mode === "dark" ? "0 10px 20px rgba(0, 0, 0, 0.5)" : "0 10px 20px rgba(0, 0, 0, 0.1)")};
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    &:hover {
        box-shadow: ${({ theme }) => (theme.palette.mode === "dark" ? "0 20px 40px rgba(0, 0, 0, 0.7)" : "0 20px 40px rgba(0, 0, 0, 0.2)")};
        transform: translateY(-10px);
    }
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 5%;
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
            <ContactContent>
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
                    If you have any questions or need further information, feel free to contact us by filling out the form below.
                </Typography>
                <ContactImage
                    src={ContactUsImg}
                    alt="contact-us"
                />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <RowContainer>
                        <TextField
                            label="Name"
                            sx={{ width: "50%" }}
                            {...register("name")}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                        <TextField
                            label="Email"
                            type="email"
                            sx={{ width: "50%" }}
                            {...register("email")}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    </RowContainer>
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
            </ContactContent>
        </ContactContainer>
    );
};

export default ContactUsPage;

import React from "react";
import SignupForm from "../components/Auth/SignupForm";
import { Box } from "@mui/material";
import styled from "styled-components";

const Container = styled(Box)`
    padding: 16px;
    background-color: ${({ theme }) => theme.palette.background.paper};
    width: 50%;
    min-width: 350px;
    margin: auto;
    margin-top: 60px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Signup: React.FC = () => {
    return (
        <Container>
            <SignupForm />
        </Container>
    );
};

export default Signup;

import React from "react";
import SignupForm from "../components/Auth/SignupForm";
import { Box } from "@mui/material";
import styled from "styled-components";

const Container = styled(Box)`
    padding: 16px;
`;

const Signup: React.FC = () => {
    return (
        <Container>
            <SignupForm />
        </Container>
    );
};

export default Signup;

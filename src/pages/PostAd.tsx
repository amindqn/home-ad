import React from "react";
import AdForm from "../components/Ad/AdForm";
import { Box } from "@mui/material";
import styled from "styled-components";

const Container = styled(Box)`
    padding: 16px;
`;

const PostAd: React.FC = () => {
    return (
        <Container>
            <AdForm />
        </Container>
    );
};

export default PostAd;

import React from "react";
import AdList from "../components/Ad/AdList";
import { Box } from "@mui/material";
import styled from "styled-components";

const Container = styled(Box)`
    padding: 16px;
`;

const Home: React.FC = () => {
    return (
        <Container>
            <AdList isHome />
        </Container>
    );
};

export default Home;

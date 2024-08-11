import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";

const AboutContainer = styled(Box)`
    max-width: 800px;
    margin: auto;
    padding: 24px;
    text-align: center;
`;

const AboutImage = styled.img`
    width: 100%;
    max-width: 400px;
    margin: 16px 0;
    border-radius: 8px;
`;

const AboutPage: React.FC = () => {
    return (
        <AboutContainer>
            <Typography
                variant="h3"
                gutterBottom
            >
                About Us
            </Typography>
            <Typography
                variant="body1"
                paragraph
            >
                Welcome to our Real Estate App! We are dedicated to helping you
                find your dream home or the perfect property to invest in. Our
                platform offers a wide range of listings, from residential
                houses to commercial properties.
            </Typography>
            <AboutImage
                src="/images/about-us.jpg"
                alt="About Us"
            />
            <Typography
                variant="body1"
                paragraph
            >
                Our mission is to provide an easy-to-use platform for buyers,
                sellers, and real estate agents to connect. Whether you're
                looking to buy, sell, or rent, our app is here to help you every
                step of the way.
            </Typography>
            <Typography
                variant="body1"
                paragraph
            >
                Thank you for choosing our Real Estate App. We look forward to
                assisting you in your real estate journey!
            </Typography>
        </AboutContainer>
    );
};

export default AboutPage;

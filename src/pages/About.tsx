import React, { useState } from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import AboutUsImg from "../assets/aboutus.jpg";

const AboutContainer = styled(Box)`
    max-width: 900px;
    margin: 30px auto;
    padding: 24px;
    text-align: center;
    perspective: 1000px;
`;

const AboutContent = styled(Box)<{ rotateX: number; rotateY: number }>`
    padding: 24px;
    border-radius: 16px;
    box-shadow: ${({ theme }) => (theme.palette.mode === "dark" ? "0 20px 40px rgba(182, 182, 182, 0.326)" : "0 20px 40px rgba(0, 0, 0, 0.15)")};
    transform: rotateY(${(props) => props.rotateY}deg) rotateX(${(props) => props.rotateX}deg);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        box-shadow: ${({ theme }) => (theme.palette.mode === "dark" ? "0 30px 60px rgba(255, 255, 255, 0.497)" : "0 30px 60px rgba(0, 0, 0, 0.3)")};
    }
`;

const AboutImage = styled.img<{ rotateX: number; rotateY: number }>`
    width: 100%;
    max-width: 400px;
    margin: 16px 0;
    border-radius: 16px;
    box-shadow: ${({ theme }) => (theme.palette.mode === "dark" ? "0 20px 40px rgba(0, 0, 0, 0.8)" : "0 20px 40px rgba(0, 0, 0, 0.2)")};
    transform: rotateY(${(props) => -props.rotateY}deg) rotateX(${(props) => -props.rotateX}deg);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        box-shadow: ${({ theme }) => (theme.palette.mode === "dark" ? "0 30px 60px rgba(0, 0, 0, 1)" : "0 30px 60px rgba(0, 0, 0, 0.4)")};
    }
`;

const AboutText = styled(Typography)`
    margin: 24px 0;
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.6;
    text-shadow: 1px 1px 2px ${({ theme }) => (theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.288)" : "rgba(0, 0, 0, 0.1)")};
`;

const AboutHeading = styled(Typography)<{ rotateX: number; rotateY: number }>`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 24px;
    text-shadow: 2px 2px 4px ${({ theme }) => (theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.288)" : "rgba(0, 0, 0, 0.2)")};
    transform: rotateY(${(props) => props.rotateY}deg) rotateX(${(props) => props.rotateX}deg) translateZ(50px);
    transition: transform 0.3s ease;
`;

const AboutPage: React.FC = () => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { clientWidth, clientHeight } = target as HTMLDivElement;

        const x = (offsetX / clientWidth) * 100 - 50;
        const y = (offsetY / clientHeight) * 100 - 50;

        setRotateX(y / 5);
        setRotateY(x / 5);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <AboutContainer
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <AboutContent
                rotateX={rotateX}
                rotateY={rotateY}
            >
                <AboutHeading
                    variant="h3"
                    gutterBottom
                    rotateX={rotateX}
                    rotateY={rotateY}
                >
                    About Us
                </AboutHeading>
                <AboutText
                    variant="body1"
                    paragraph
                >
                    Welcome to our Real Estate App! We are dedicated to helping you find your dream home or the perfect property to invest in. Our platform offers a wide range of listings, from
                    residential houses to commercial properties.
                </AboutText>
                <AboutImage
                    src={AboutUsImg}
                    alt="About Us"
                    rotateX={rotateX}
                    rotateY={rotateY}
                />
                <AboutText
                    variant="body1"
                    paragraph
                >
                    Our mission is to provide an easy-to-use platform for buyers, sellers, and real estate agents to connect. Whether you're looking to buy, sell, or rent, our app is here to help you
                    every step of the way.
                </AboutText>
                <AboutText
                    variant="body1"
                    paragraph
                >
                    Thank you for choosing our Real Estate App. We look forward to assisting you in your real estate journey!
                </AboutText>
            </AboutContent>
        </AboutContainer>
    );
};

export default AboutPage;

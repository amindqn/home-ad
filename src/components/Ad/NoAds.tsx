import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NoAdsImage from "../../assets/no-ads.png";

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 32px;
    background-color: ${({ theme }) => theme.palette.background.paper};
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 40px auto;
`;

const Image = styled.img`
    width: 90%;
    margin-bottom: 24px;
    border-radius: 4px;
`;

const NoAds: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Image
                src={NoAdsImage}
                alt="No Ads Available"
            />
            <Typography
                variant="h5"
                gutterBottom
            >
                No Ads Available
            </Typography>
            <Typography
                variant="body1"
                color="textSecondary"
                gutterBottom
            >
                It looks like there are no ads to display. Please log in or sign
                up to view or post ads.
            </Typography>
            <Box
                mt={2}
                display="flex"
                justifyContent="center"
                gap={2}
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate("/login")}
                >
                    Login
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate("/signup")}
                >
                    Sign Up
                </Button>
            </Box>
        </Container>
    );
};

export default NoAds;

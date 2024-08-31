import React from "react";
import {
    Box,
    Container,
    Typography,
    Link,
    Grid,
    useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)(({ theme }) => ({
    position: "sticky",
    bottom: 0,
    background: theme.palette.background.paper,
    padding: theme.spacing(1),
    borderTop: `1px solid ${theme.palette.divider}`,
    zIndex: 500,
}));

const FooterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.text,
    marginRight: theme.spacing(2),
    textDecoration: "none",
    "&:hover": {
        textDecoration: "underline",
    },
}));

const Footer: React.FC = () => {
    const isBigScreen = useMediaQuery("(min-width:600px)");

    return (
        <FooterContainer>
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={4}
                >
                    {isBigScreen && (
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <Typography
                                variant="h6"
                                gutterBottom
                            >
                                About Us
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                            >
                                We are a company dedicated to providing the best
                                real estate services.
                            </Typography>
                        </Grid>
                    )}
                    <Grid
                        item
                        xs={12}
                        sm={4}
                    >
                        <Typography
                            variant="h6"
                            gutterBottom
                        >
                            Quick Links
                        </Typography>
                        <FooterLink href="/">Home</FooterLink>
                        <FooterLink href="/about">About</FooterLink>
                        <FooterLink href="/contact">Contact</FooterLink>
                    </Grid>
                    {isBigScreen && (
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <Typography
                                variant="h6"
                                gutterBottom
                            >
                                Contact Us
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                            >
                                Email: contact@example.com
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                            >
                                Phone: +1 234 567 890
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </FooterContainer>
    );
};

export default Footer;

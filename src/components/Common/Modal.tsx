import React from "react";
import {
    Modal as MUIModal,
    Box,
    Typography,
    Fade,
    Backdrop,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import { useModal } from "../../hooks/useModal";

const StyledBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 40vw;
    max-height: 70vh;
    border-radius: 8px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    padding: 24px;
    outline: none;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.text.primary};
`;


const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    border-bottom: 2px solid ${({ theme }) => theme.palette.divider};
`;

const Modal: React.FC = () => {
    const { show, setShow, content } = useModal();

    const handleClose = () => {
        setShow(false);
    };

    return (
        <MUIModal
            open={show}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={show}>
                <StyledBox>
                    {content && (
                        <>
                            <Header >
                                <Typography
                                    variant="h6"
                                    component="h1"
                                    gutterBottom
                                    sx={{fontWeight:"bold"}}
                                >
                                    {content.title}
                                </Typography>
                                <IconButton
                                    aria-label="close"
                                    onClick={handleClose}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </Header>
                            <div>{content.body}</div>
                        </>
                    )}
                </StyledBox>
            </Fade>
        </MUIModal>
    );
};

export default Modal;

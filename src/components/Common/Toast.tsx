import React, { useEffect } from "react";
import styled from "styled-components";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useToast from "../../hooks/useToast";

const ToastContainer = styled(Box)`
    position: fixed;
    top: 80px;
    right: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    gap: 10px;
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.75);
`;

const ToastMessage = styled(Box)<{ type: string }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: ${({ type }) =>
        type === "success"
            ? "#4caf50"
            : type === "error"
            ? "#f44336"
            : "#2196f3"};
    color: white;
    position: relative;
    overflow: hidden;
`;

const ProgressBar = styled.div<{ duration: number }>`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.5);
    animation: ${({ duration }) => `fill ${duration}ms linear forwards`};

    @keyframes fill {
        from {
            width: 100%;
        }
        to {
            width: 0;
        }
    }
`;

const Toast: React.FC = () => {
    const { toasts, removeToast } = useToast();

    useEffect(() => {
        const timers = toasts.map((toast) =>
            setTimeout(() => removeToast(toast.id), toast.duration || 5000)
        );

        return () => {
            timers.forEach(clearTimeout);
        };
    }, [toasts, removeToast]);

    return (
        <ToastContainer>
            {toasts.map((toast) => (
                <ToastMessage
                    key={toast.id}
                    type={toast.type}
                >
                    <Typography variant="body1">{toast.message}</Typography>
                    <IconButton
                        size="small"
                        color="inherit"
                        onClick={() => removeToast(toast.id)}
                    >
                        <CloseIcon />
                    </IconButton>
                    <ProgressBar duration={toast.duration} />
                </ToastMessage>
            ))}
        </ToastContainer>
    );
};

export default Toast;

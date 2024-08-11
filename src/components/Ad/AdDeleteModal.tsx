import React from "react";
import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
} from "@mui/material";
import { useModal } from "../../hooks/useModal";
import { Ad } from "../../types/adTypes";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import useAdApi from "../../api/adApi";

interface ConfirmDeleteProps {
    ad: Ad;
}

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({ ad }) => {
    const { setShow } = useModal();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { deleteAd } = useAdApi();
    const mutation = useMutation(() => deleteAd(ad.id), {
        onSuccess: () => {
            queryClient.invalidateQueries("ads");
            setShow(false);
            navigate("/");
        },
    });
    return (
        <>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete <b>{ad.title}</b> ad? This
                    action cannot be undone.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => setShow(false)}
                    color="primary"
                >
                    Cancel
                </Button>
                <Button
                    onClick={() => mutation.mutate()}
                    color="secondary"
                    variant="contained"
                >
                    Delete
                </Button>
            </DialogActions>
        </>
    );
};

export default ConfirmDelete;

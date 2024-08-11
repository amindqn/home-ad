import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { Ad } from "../../types/adTypes";
import { Button, TextField, Box } from "@mui/material";
import styled from "styled-components";
import MapComponent from "../Map/LocationPicker";
import useAdApi from "../../api/adApi";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useModal } from "../../hooks/useModal";
import adFormSchema from "../../formsSchema/adFormSchema";

const FormContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 900px;
    margin: auto;
    padding: 16px;
`;

interface AdFormProps {
    ad?: Ad;
    isEditing?: boolean;
}

const AdForm: React.FC<AdFormProps> = ({ ad, isEditing }) => {
    const { createAd, updateAd } = useAdApi();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {setShow} = useModal()

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: ad?.title || "",
            address: ad?.address || "",
            phone: ad?.phone || "",
            description: ad?.description || "",
            location: ad?.location || [35.6892523, 51.3896004],
        },
        resolver: yupResolver(adFormSchema),
    });

    const location = watch("location");

    const createMutation = useMutation(createAd, {
        onSuccess: () => {
            queryClient.invalidateQueries("dash-ads");
        },
    });

    const updateMutation = useMutation(
        (updatedAd: Ad) => updateAd(ad?.id, updatedAd),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("dash-ads");
            },
        }
    );

    const onSubmit = (data : any) => {
        if (isEditing) {
            updateMutation.mutate(data);
            setShow(false);
        } else {
            createMutation.mutate(data);
        }
        navigate("/dashboard");
    };

    useEffect(() => {
        if (ad) {
            setValue("location", ad.location);
        }
    }, [ad, setValue]);

    const handleLocationSelect = (newLocation: [number, number]) => {
        setValue("location", newLocation);
    };

    return (
        <FormContainer
            component="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2>{isEditing ? "Edit Form" : "Create Ad"}</h2>

            <TextField
                label="Title"
                fullWidth
                error={!!errors.title}
                helperText={errors.title?.message}
                {...register("title")}
            />

            <TextField
                label="Address"
                fullWidth
                error={!!errors.address}
                helperText={errors.address?.message}
                {...register("address")}
            />

            <TextField
                label="Phone"
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone?.message}
                {...register("phone")}
            />

            <TextField
                label="Description"
                fullWidth
                multiline
                rows={4}
                error={!!errors.description}
                helperText={errors.description?.message}
                {...register("description")}
            />

            <MapComponent
                onLocationSelect={handleLocationSelect}
                prePosition={location as [number, number]}
            />

            {errors.location && (
                <p style={{ color: "red" }}>{errors.location.message}</p>
            )}

            <Button
                variant="contained"
                color="primary"
                type="submit"
            >
                {isEditing ? "Update Ad" : "Create Ad"}
            </Button>
        </FormContainer>
    );
};

export default AdForm;

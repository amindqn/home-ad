import React from "react";
import { useParams } from "react-router-dom";
import AdForm from "../components/Ad/AdForm";
import { Box } from "@mui/material";
import styled from "styled-components";
import useAdApi from "../api/adApi";
import { useQuery } from "react-query";

const Container = styled(Box)`
    padding: 16px;
`;

interface EditAdProps {
    adId: string | undefined;
}
const EditAd: React.FC<EditAdProps> = ({adId}) => {
    // const { id } = useParams<{ id: string }>();
    const { fetchAdById } = useAdApi();
    const {
        data: ad,
        isLoading,
        isError,
    } = useQuery(["ad", adId], () => fetchAdById(adId));

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading ad</div>;

    return (
        <Container>
            <AdForm
                ad={ad}
                isEditing
            />
        </Container>
    );
};

export default EditAd;

import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
    Button,
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Divider,
} from "@mui/material";
import styled from "styled-components";
import MapComponent from "../Map/LocationPicker";
import useAdApi from "../../api/adApi";
import useIsOwner from "../../hooks/useIsOwner";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import { useModal } from "../../hooks/useModal";
import EditAd from "../../pages/EditAd";
import ConfirmDelete from "./AdDeleteModal";

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    max-width: 900px;
    margin: 30px auto;
    background-color: ${({theme}) => theme.palette.background.paper};
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const AdCard = styled(Card)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const AdInfo = styled(CardContent)`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const AdTitle = styled(Typography)`
    font-size: 28px !important;
    font-weight: bold !important;
`;

const AdAddress = styled(Typography)`
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 8px;
`;

const AdDescription = styled(Typography)`
    font-size: 16px;
`;

const ActionsContainer = styled(Box)`
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    margin-top: 24px;
`;

const AdDetail: React.FC = () => {
    const { fetchAdById } = useAdApi();
    const { id } = useParams<{ id: string }>();
    const {
        data: ad,
        isLoading,
        isError,
    } = useQuery(["ad", id], () => fetchAdById(id));
    const isOwner = useIsOwner(ad);
    const { setShow, setContent } = useModal();

    const setEditAdModal = () => {
        setContent({
            title: "Edit your Ad",
            body: <EditAd adId={id} />,
        });
        setShow(true);
    };

    const setDeleteAdModal = () => {
        setContent({
            title: "Delete your Ad",
            body: <ConfirmDelete ad={ad} />,
        });
        setShow(true);
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading ad</div>;

    return (
        <Container>
            <AdCard>
                <AdInfo>
                    <AdTitle>{ad?.title}</AdTitle>
                    <AdAddress>
                        <HomeIcon />
                        {ad?.address}
                    </AdAddress>
                    <Divider />
                    <AdDescription>{ad?.description}</AdDescription>
                    <Divider />
                    <AdAddress>
                        <PhoneIcon />
                        {ad?.phone}
                    </AdAddress>
                </AdInfo>
                <CardMedia>
                    <MapComponent
                        prePosition={ad?.location as [number, number]}
                    />
                </CardMedia>
            </AdCard>
            {isOwner && (
                <ActionsContainer>
                    <Button
                        variant="outlined"
                        startIcon={<EditIcon />}
                        onClick={setEditAdModal}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        onClick={setDeleteAdModal}
                    >
                        Delete
                    </Button>
                </ActionsContainer>
            )}
        </Container>
    );
};

export default AdDetail;

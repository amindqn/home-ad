import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Ad } from "../../types/adTypes";
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
} from "@mui/material";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const StyledCard = styled(Card)`
    margin: 16px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    width: 25%;
    min-width: 250px;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
`;

const MapWrapper = styled.div`
    height: 150px;
    width: 100%;
    margin-top: 16px;
    border-radius: 8px;
    overflow: hidden;
`;

interface AdCardProps {
    ad: Ad;
}

const AdCard: React.FC<AdCardProps> = ({ ad }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/ads/${ad.id}`);
    };

    return (
        <StyledCard onClick={handleClick}>
            <CardContent>
                <Typography
                    variant="h5"
                    component="div"
                >
                    {ad.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {ad.address}
                </Typography>
                <MapWrapper>
                    <MapContainer
                        center={[ad.location[0], ad.location[1]]}
                        zoom={13}
                        scrollWheelZoom={false}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[ad.location[0], ad.location[1]]} />
                    </MapContainer>
                </MapWrapper>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    onClick={handleClick}
                >
                    View Details
                </Button>
            </CardActions>
        </StyledCard>
    );
};

export default AdCard;

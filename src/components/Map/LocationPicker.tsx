import React, { useState, useEffect } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    useMap,
    useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styled from "styled-components";
import SearchBox from "./SearchBox";

const StyledMapContainer = styled(MapContainer)`
    height: 400px;
    width: 100%;
`;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface LocationPickerProps {
    onLocationSelect?: (position: [number, number]) => void;
    prePosition?: [number, number];
}

const LocationPicker: React.FC<LocationPickerProps> = ({
    onLocationSelect,
    prePosition = [51.505, -0.09],
}) => {
    const [position, setPosition] = useState<[number, number]>(prePosition);
    useEffect(() => {
        if(onLocationSelect){
            setPosition(prePosition);
            onLocationSelect(prePosition);
        }
    }, [prePosition]);


    useMapEvents({
        click(e) {
            if (onLocationSelect) {
                const newPosition: [number, number] = [
                    e.latlng.lat,
                    e.latlng.lng,
                ];
                setPosition(newPosition);
                onLocationSelect(newPosition);
            }
        },
    });

    return <Marker position={position} />;
};

interface MapComponentProps {
    onLocationSelect?: (position: [number, number]) => void;
    prePosition : [number, number];
}

const MapComponent: React.FC<MapComponentProps> = ({
    onLocationSelect,
    prePosition = [51.505, -0.09],
}) => {
    const [position, setPosition] = useState<[number, number]>(prePosition);

    const handleLocationSelect = (newPosition: [number, number]) => {
        if (onLocationSelect) {
            setPosition(newPosition);
            onLocationSelect(newPosition);
        }
    };

    return (
        <div>
            {onLocationSelect && <SearchBox onSelect={handleLocationSelect} />}
            <StyledMapContainer
                center={position}
                zoom={13}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MapEvents position={position} />

                <LocationPicker
                    prePosition={position}
                    onLocationSelect={onLocationSelect}
                />
            </StyledMapContainer>
        </div>
    );
};

interface MapEventsProps {
    position: [number, number];
}

const MapEvents: React.FC<MapEventsProps> = ({ position }) => {
    const map = useMap();

    useEffect(() => {
        map.setView(position, 15);
    }, [position, map]);

    useMapEvents({
        click(e) {
            const newPosition: [number, number] = [e.latlng.lat, e.latlng.lng];
            map.setView(newPosition, map.getZoom());
        },
    });

    return null;
};

export default MapComponent;

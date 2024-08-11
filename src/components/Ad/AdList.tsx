import React, { useState } from "react";
import { useQuery } from "react-query";
import AdCard from "./AdCard";
import { Box } from "@mui/material";
import styled from "styled-components";
import { Ad } from "../../types/adTypes";
import useAdApi from "../../api/adApi";
import useAuth from "../../hooks/useAuth";
import NoAds from "./NoAds";

const Container = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 16px;
    padding: 16px;
    width: fit-content;
`;

interface AdListProps {
    isHome?: boolean;
}
const AdList = ({ isHome = false }: AdListProps) => {
    const [page, setPage] = useState(1);
    const { fetchUserAds, fetchAds } = useAdApi();
    const { authData } = useAuth();
    const userId = authData?.id;

    const queryKey = isHome ? ["home-ads", page] : ["dash-ads", page, userId];
    const queryFn = isHome ? () => fetchAds(page) : () => fetchUserAds(page);

    const {
        data: ads = [],
        isLoading,
        isError,
    } = useQuery<Ad[]>(queryKey, queryFn, {
        keepPreviousData: false,
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading ads</div>;

    if (ads.length === 0) return <NoAds />;
    return (
        <Container>
            {ads?.map((ad) => (
                <AdCard
                    key={ad.id}
                    ad={ad}
                />
            ))}
        </Container>
    );
};

export default AdList;

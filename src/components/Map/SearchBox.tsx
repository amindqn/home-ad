import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { useDebounce } from "../../hooks/useDebounce";
import useClickOutside from "../../hooks/useClickOutSide";

const SearchContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: 16px auto;
`;

const SearchInput = styled.input`
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
`;

const SearchResults = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #ccc;
    border-top: none;
    list-style: none;
    padding: 0;
    margin: 0;
    z-index: 401;
`;

const SearchResultItem = styled.li`
    padding: 8px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.background.paper};
    &:hover {
        background-color: #f0f0f0;
        color:#000;
    }
`;

interface SearchBoxProps {
    onSelect: (position: [number, number], label: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSelect }) => {
    const [query, setQuery] = useState("");
    const searchResultRef = useRef<HTMLUListElement>(null);
    const [results, setResults] = useState<any[]>([]);
    const debouncedQuery = useDebounce(query, 500);

    useClickOutside(searchResultRef, () => setResults([]));
    useFindPositions(debouncedQuery, setResults);

    const handleSelect = (lat: number, lon: number, label: string) => {
        onSelect([lat, lon], label);
        setQuery(label);
        setResults([]);
    };

    return (
        <SearchContainer>
            <SearchInput
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a location..."
            />
            {results.length > 0 && (
                <SearchResults ref={searchResultRef}>
                    {results.map((result) => (
                        <SearchResultItem
                            key={result.properties.osm_id}
                            onClick={() =>
                                handleSelect(
                                    result.geometry.coordinates[1],
                                    result.geometry.coordinates[0],
                                    result.properties.name
                                )
                            }
                        >
                            {result.properties.name},{" "}
                            {result.properties.country}
                        </SearchResultItem>
                    ))}
                </SearchResults>
            )}
        </SearchContainer>
    );
};

export default SearchBox;



const useFindPositions = (
    query: string,
    onFetchFn: (results: any[]) => void
) => {
    useEffect(() => {
        if (query) {
            axios
                .get(`https://photon.komoot.io/api/?q=${query}&limit=5`)
                .then((response) => {
                    onFetchFn(response.data.features);
                })
                .catch((error) => {
                    console.error("Error fetching search results", error);
                });
        } else {
            onFetchFn([]);
        }
    }, [query]);
};

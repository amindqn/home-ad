import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import AdList from "../Ad/AdList";
import styled from "styled-components";
import ProfileTab from "./ProfileTab";

const TabContent = styled(Box)`
    padding-top: 16px;
`;

const TabsContainer: React.FC = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    return (
        <>
            <Tabs
                value={currentTab}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="My Ads" />
                <Tab label="Profile" />
            </Tabs>
            <TabContent>
                {currentTab === 0 && <AdList />}
                {currentTab === 1 && <ProfileTab />}
            </TabContent>
        </>
    );
};

export default TabsContainer;

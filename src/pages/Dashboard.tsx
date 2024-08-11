import { Box } from "@mui/material";
import styled from "styled-components";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import TabsContainer from "../components/Dashboard/TabsContainer";
import useRedirect from "../hooks/useRedirect";

const Container = styled(Box)`
    padding: 16px;
`;

const Dashboard = () => {
    useRedirect();
    return (
        <Container>
            <DashboardHeader />
            <TabsContainer />
        </Container>
    );
};

export default Dashboard;

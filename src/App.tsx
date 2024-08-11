import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Common/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PostAd from "./pages/PostAd";
import AdDetail from "./components/Ad/AdDetail";
import GlobalStyles from "./styles/globalStyles";
import { AuthProvider } from "./contexts/AuthContex";
import { ThemeProvider } from "./contexts/ThemeContex";
import Footer from "./components/Common/Footer";
import { ModalProvider } from "./contexts/ModalContex";
import Modal from "./components/Common/Modal";
import { ToastProvider } from "./contexts/ToastContext";
import Toast from "./components/Common/Toast";
import AboutPage from "./pages/About";
import ContactUsPage from "./pages/ContactUs";
import BackButton from "./components/Common/BackButton";
import routes from "./routesConfig";

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <ThemeProvider>
                    <ToastProvider>
                        <ModalProvider>
                            <GlobalStyles />
                            <Router>
                                <Header />
                                <main>
                                    <BackButton />
                                    <Routes>
                                        {routes.map((route, index) => (
                                            <Route
                                                key={index}
                                                path={route.path}
                                                element={<route.element />}
                                            />
                                        ))}
                                    </Routes>
                                </main>
                                <Modal />
                                <Toast />
                                <Footer />
                            </Router>
                        </ModalProvider>
                    </ToastProvider>
                </ThemeProvider>
            </AuthProvider>
        </QueryClientProvider>
    );
};

export default App;

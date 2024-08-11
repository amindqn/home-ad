import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PostAd from "./pages/PostAd";
import AdDetail from "./components/Ad/AdDetail";
import AboutPage from "./pages/About";
import ContactUsPage from "./pages/ContactUs";

interface RouteConfig {
    path: string;
    element: React.FC;
    exact?: boolean;
}

const routes: RouteConfig[] = [
    {
        path: "/",
        element: Home,
        exact: true,
    },
    {
        path: "/login",
        element: Login,
    },
    {
        path: "/signup",
        element: Signup,
    },
    {
        path: "/dashboard",
        element: Dashboard,
    },
    {
        path: "/post-ad",
        element: PostAd,
    },
    {
        path: "/ads/:id",
        element: AdDetail,
    },
    {
        path: "/about",
        element: AboutPage,
    },
    {
        path: "/contact",
        element: ContactUsPage,
    },
];

export default routes;

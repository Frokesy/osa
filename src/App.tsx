import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import VocationalSkillsDevelopment from "./pages/services/vsd";
import RecruitmentServices from "./pages/services/rss";
import PayrollCompensationDevelopment from "./pages/services/pcd";
import PerformanceManagementSystem from "./pages/services/pms";
import BusinessProcessManual from "./pages/services/bppm";
import OrganizationDevelopment from "./pages/services/odc";
import Team from "./pages/about/team";
import CoreValues from "./pages/about/values";
import History from "./pages/about/history";
import Careers from "./pages/careers";
import NewsHighlights from "./pages/media/highlights";
import HrNugget from "./pages/media/nugget";
import HrAdvisory from "./pages/services/hra";
import Gallery from "./pages/gallery";
import Slug from "./pages/media/slug";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/contact", element: <Contact /> },
    { path: "/career", element: <Careers /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/blog/:slug", element: <Slug /> },
    
    // services routes
    { path: "/services/vsd", element: <VocationalSkillsDevelopment /> },
    { path: "/services/hra", element: <HrAdvisory /> },
    { path: "/services/rss", element: <RecruitmentServices /> },
    { path: "/services/pcd", element: <PayrollCompensationDevelopment /> },
    { path: "/services/rs", element: <PerformanceManagementSystem /> },
    { path: "/services/bppm", element: <BusinessProcessManual /> },
    { path: "/services/odc", element: <OrganizationDevelopment /> },
    
    // about routes
    { path: "/about/team", element: <Team /> },
    { path: "/about/core-values", element: <CoreValues /> },
    { path: "/about/history", element: <History /> },

    // media routes
    { path: "/media/highlights", element: <NewsHighlights /> },
    { path: "/media/nugget", element: <HrNugget /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;

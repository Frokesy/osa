import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import VocationalSkillsDevelopment from "./pages/services/vsd";
import TalentManagement from "./pages/services/tmo";
import RecruitmentServices from "./pages/services/rss";
import PayrollCompensationDevelopment from "./pages/services/pcd";
import PerformanceManagementSystem from "./pages/services/pms";
import BusinessProcessManual from "./pages/services/bppm";
import OrganizationDevelopment from "./pages/services/odc";
import Team from "./pages/about/team";
import CoreValues from "./pages/about/values";
import History from "./pages/about/history";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/contact", element: <Contact /> },
    
    // services routes
    { path: "/services/vsd", element: <VocationalSkillsDevelopment /> },
    { path: "/services/tmo", element: <TalentManagement /> },
    { path: "/services/rss", element: <RecruitmentServices /> },
    { path: "/services/pcd", element: <PayrollCompensationDevelopment /> },
    { path: "/services/pms", element: <PerformanceManagementSystem /> },
    { path: "/services/bppm", element: <BusinessProcessManual /> },
    { path: "/services/odc", element: <OrganizationDevelopment /> },
    
    // about routes
    { path: "/about/team", element: <Team /> },
    { path: "/about/core-values", element: <CoreValues /> },
    { path: "/about/history", element: <History /> }
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;

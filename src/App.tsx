import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import VocationalSkillsDevelopment from "./pages/services/vsd";
import TalentManagement from "./pages/services/tmo";
import RecruitmentServices from "./pages/services/rss";
import PayrollCompensationDevelopment from "./pages/services/pcd";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/contact", element: <Contact /> },
    { path: "/services/vsd", element: <VocationalSkillsDevelopment /> },
    { path: "/services/tmo", element: <TalentManagement /> },
    { path: "/services/rss", element: <RecruitmentServices /> },
    { path: "/services/pcd", element: <PayrollCompensationDevelopment /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;

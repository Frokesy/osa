import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import VocationalSkillsDevelopment from "./pages/services/vsd";
import TalentManagement from "./pages/services/tmo";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/contact", element: <Contact /> },
    { path: "/services/vsd", element: <VocationalSkillsDevelopment /> },
        { path: "/services/tmo", element: <TalentManagement /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;

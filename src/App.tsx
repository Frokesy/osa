import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Team from "./pages/about/team";
import CoreValues from "./pages/about/values";
import History from "./pages/about/history";
import Careers from "./pages/careers";
import NewsHighlights from "./pages/media/highlights";
import HrNugget from "./pages/media/nugget";
import Gallery from "./pages/gallery";
import Slug from "./pages/media/slug";
import Terms from "./pages/legal/terms";
import PrivacyPolicy from "./pages/legal/privacy-policy";
import CookiesPolicy from "./pages/legal/cookies-policy";
import ServicePage from "./pages/services";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/contact", element: <Contact /> },
    { path: "/career", element: <Careers /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/blog/:slug", element: <Slug /> },

    // // services routes
    { path: "/services/:slug", element: <ServicePage /> },

    // about routes
    { path: "/about/team", element: <Team /> },
    { path: "/about/core-values", element: <CoreValues /> },
    { path: "/about/history", element: <History /> },

    // media routes
    {
      path: "/media/highlights",
      element: <NewsHighlights superCategory="news-highlights" />,
    },
    { path: "/media/nugget", element: <HrNugget superCategory="hr-nugget" /> },

    //legal routes
    { path: "/terms", element: <Terms /> },
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
    { path: "/cookies-policy", element: <CookiesPolicy /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;

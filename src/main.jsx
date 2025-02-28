import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./Pages/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/layout/Home";
import Services from "./Pages/Services";
import Faq from "./Pages/Faq";
import ContactUs from "./Pages/ContactUS";
import NotFound from "./Pages/NotFound";
import AdminPanel from "./Pages/admin/AdminPanel";
import Dashboard from "./components/admin/Dashboard";
import AdminProfile from "./Pages/admin/AdminProfile";
import BisFaqManager from "./components/admin/BisFaqManager";
import SmoothScroll from "./utils/smootScroll";
import CanvasCursor from "./components/CanvasCursor";
import Bis from "./ServicePages/Bis";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

// Layout Component for Public Pages
const Layout = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      {!isMobile && <CanvasCursor />} {/* Render only on larger screens */}
      <SmoothScroll />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

// Layout for Admin Panel (Allows Nested Routes)
const AdminLayout = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      {!isMobile && <CanvasCursor />} {/* Render only on larger screens */}
      <SmoothScroll />
      <AdminPanel />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Public Layout with Navbar & Footer
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "services/bis", element: <Bis /> },
      { path: "faqs", element: <Faq /> },
      { path: "contact", element: <ContactUs /> },
      { path: "*", element: <NotFound /> }, // Catch-all route
    ],
  },
  {
    path: "/admin/*",
    element: <AdminLayout />, // Admin Panel Layout
    children: [
      { index: true, element: <Dashboard /> }, // Default admin route
      { path: "profile", element: <AdminProfile /> },
      { path: "bisfaq", element: <BisFaqManager /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

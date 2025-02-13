import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "./Pages/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/layout/Home";
import Services from "./Pages/Services";
import Post from "./Pages/Post";
import Faq from "./Pages/Faq";
import ContactUs from "./Pages/ContactUS";
import NotFound from "./Pages/NotFound";
import AdminPanel from "./Pages/admin/AdminPanel";

// Layout Component to Avoid Repeating Navbar & Footer
const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Shared Layout
    children: [
      { index: true, element: <Home /> }, // Default route
      { path: "/", element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "services/:post", element: <Post /> },
      { path: "faqs", element: <Faq /> },
      { path: "contact", element: <ContactUs /> },
      { path: "*", element: <NotFound /> }, // Catch-all route
    ],
  },
  {
    path: "/admin",
    element: <AdminPanel />,
    children: [
      { path: "dashboard", element: <div>Admin Dashboard</div> },
      { path: "settings", element: <div>Admin Settings</div> },
      { path: "*", element: <div>Admin NotFound</div> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar.jsx";
import Services from "./Pages/Services.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Bis from "./Pages/Bis.jsx";
import Home from "./Pages/Home.jsx";
import Footer from "./Footer.jsx";

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
      { path: "services", element: <Services /> },
      { path: "services/bis", element: <Bis /> },
      { path: "*", element: <NotFound /> }, // Catch-all route
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

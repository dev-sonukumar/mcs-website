import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar.jsx";
import Services from "./Pages/Services.jsx";
import NotFound from "./Pages/NotFound.jsx";
// import Bis from "./Pages/Bis.jsx";
import Home from "./Pages/Home.jsx";
import Footer from "./Footer.jsx";
// import Post from "./components/posts/post.jsx";
import FAQ from "./Pages/Faq.jsx";
import ContactUs from "./Pages/ContactUS.jsx";
import Post from "./components/Post.jsx";

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
      { path: "faqs", element: <FAQ /> },
      { path: "contact", element: <ContactUs /> },
      { path: "*", element: <NotFound /> }, // Catch-all route
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

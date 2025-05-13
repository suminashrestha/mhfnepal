import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage.tsx";
import About from "./routes/About.tsx";
import Donate from "./routes/Donate.tsx";
import Media from "./routes/Media.tsx";
import OurWorks from "./routes/OurWorks.tsx";
import Resources from "./routes/Resources.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import ContactUs from "./routes/ContactUs.tsx";

const router = createBrowserRouter([
 {
  element: <MainLayout/>,
  children: [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
    {
      path: "/donate",
      element: <Donate />,
    },
    {
      path: "/media",
      element: <Media />,
    },
    {
      path: "/media/photogallery"
    },
    {
      path: "/ourworks",
      element: <OurWorks />,
    },
    {
      path: "/resources",
      element: <Resources />,
    },
  ]
 }
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);

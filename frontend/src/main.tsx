import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/user/Homepage.tsx";
import About from "./routes/user/About.tsx";
import Donate from "./routes/user/Donate.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import ContactUs from "./routes/user/ContactUs.tsx";
import Blogs from "./routes/user/Blogs.tsx";
import OngoingProject from "./routes/user/OngoingProject.tsx";
import Collaboration from "./routes/user/Collaboration.tsx";
import PhotoGallery from "./routes/user/PhotoGallery.tsx";
import Videos from "./routes/user/Videos.tsx";
import Accomplishment from "./routes/user/Accomplishment.tsx";
import ThematicAreas from "./routes/user/ThematicAreas.tsx";
import AdminLayout from "./layouts/AdminLayout.tsx";

const router = createBrowserRouter([
  // Admin route
  {
    path: "/admin-secret-3948jd", // ← only you know this route
    element: < AdminLayout/>,
  },
  {
    element: <MainLayout />,
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
        path: "/media/photogallery",
      },
      {
        path: "/ourworks",
        children: [
          {
            path: "blogs",
            element: <Blogs />,
            children: [
              {
                path: ":id",
                element: <Blogs />, //blogcontent
              },
            ],
          },
          {
            path: "thematic-areas",
            element: <ThematicAreas />,
          },
          {
            path: "accomplishment",
            element: <Accomplishment />,
          },
        ],
      },
      {
        path: "/research",
        children: [
          {
            path: "ongoing-projects",
            element: <OngoingProject />,
          },

          {
            path: "collaboration",
            element: <Collaboration />,
          },
        ],
      },

      {
        path: "/media",
        children: [
          {
            path: "photo-gallery",
            element: <PhotoGallery />,
          },
          {
            path: "videos",
            element: <Videos />,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

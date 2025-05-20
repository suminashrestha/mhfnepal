import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage.tsx";
import About from "./routes/About.tsx";
import Donate from "./routes/Donate.tsx";
import Media from "./routes/Media.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import ContactUs from "./routes/ContactUs.tsx";
import Blogs from "./routes/Blogs.tsx";
import Stories from "./routes/Stories.tsx";
import OngoingProject from "./routes/OngoingProject.tsx";
import CaseStudies from "./routes/CaseStudies.tsx";
import Collaboration from "./routes/Collaboration.tsx";
import PhotoGallery from "./routes/PhotoGallery.tsx";
import Videos from "./routes/Videos.tsx";
import Mentions from "./routes/Mentions.tsx";
import Accomplishment from "./routes/Accomplishment.tsx";

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
      path: "/ourworks/blogs",
      element: <Blogs/>,
    },
    {
      path: "/ourworks/success-stories",
      element: <Stories/>,
    },
    {
      path: "/ourworks/accomplishment",
      element: <Accomplishment/>,
    },
    {
      path: "/research/ongoing-projects",
      element: <OngoingProject/>,
    },
    {
      path: "/research/case-studies",
      element: <CaseStudies/>,
    },
    {
      path: "/research/collaboration",
      element: <Collaboration/>,
    },
    

    {
      path: "/media/photo-gallery",
      element: <PhotoGallery/>
    },
    
    {
      path: "/media/videos",
      element: <Videos/>
    },

   {
    path: "/media/mentions",
    element: <Mentions/>
   }
  ]
 }
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);

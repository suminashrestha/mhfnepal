import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { AnimatePresence } from "motion/react";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="font-roboto overflow-x-hidden">
      <NavBar />
      <AnimatePresence mode="wait">
        <ScrollToTop />
        <Outlet key={location.pathname} />
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default MainLayout;

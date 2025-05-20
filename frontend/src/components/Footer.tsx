import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaFacebook, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FooterLinks from "./FooterLinks";
import { AiFillInstagram } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="bg-blue-950 h-auto w-screen text-white p-2  bottom-0">
      <div className="flex gap-5 justify-around items-center border-b-1 flex-col md:flex-row">
        <div className="p-3 flex flex-col gap-5">
          <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">Get in touch</h1>
          <FooterLinks title="Kathmandu, Nepal" type="">
            <FaLocationDot />
          </FooterLinks>
          <FooterLinks title="9802046556" type="tel">
            <FaPhoneAlt />
          </FooterLinks>
          <FooterLinks title="mahabirhfoundation@gmail.com" type="mailto">
            <MdEmail />
          </FooterLinks>
        </div>
        <div className="flex flex-col items-center gap-5 h-full justify-center">
          <h1 className="text-lg md:text-xl font-bold">
            Subscribe to newsletter
          </h1>
          <div className="flex gap-2">
            <Input type="email" placeholder=" Provide Email" className="border-none" />
            <Button className="bg-blue-950 border-1 hover:bg-blue-500 hover:border-none">Submit</Button>
          </div>
        </div>

        <div className="flex flex-col h-full justify-around items-center p-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-lg md:text-2xl font-bold text-center">Quick Links</h1>
            <ul className="grid grid-cols-2 grid-rows-4 gap-6 text-center">
              <Link to="/" className="hover:text-blue-500">Home</Link>
              <Link to="/about" className="hover:text-blue-500">About</Link>
              <Link to="/contact" className="hover:text-blue-500">Contact</Link>
              <Link to="#" className="hover:text-blue-500">Blogs</Link>
              <Link to="#" className="hover:text-blue-500">Photo Gallery</Link>
              <Link to="#" className="hover:text-blue-500">Videos</Link>
            </ul>
          </div>
          <div className="flex gap-3">
            <FaFacebook className="h-8 w-8 cursor-pointer" />
            <AiFillInstagram className="h-8 w-8 cursor-pointer" />
            <FaYoutube className="h-8 w-8 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col md:flex-row gap-2 justify-around text-xs md:text-sm">
        <div>Copyright ©2025 Mahabir Health Foundation. All Rights Reserved</div>
        <div>Developed and Designed by: Somash&Sumina</div>
      </div>
    </div>
  );
};

export default Footer;

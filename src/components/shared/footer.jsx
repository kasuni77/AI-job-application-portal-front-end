import { Separator } from "@/components/ui/separator";
import React from "react";
import { SocialIcon } from "react-social-icons";
import logo from "../../../public/assets/home/logo.png";

function Footer() {
  return (
    <div className="py-10">
      <Separator />
      <br />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex justify-center mb-4 md:mb-0">
            <img src={logo} alt="Hirely AI Logo" className="h-24" />
          </div>
          <div className="flex justify-center space-x-4 mb-4 md:mb-0">
            <SocialIcon
              url="https://github.com/kasuni77"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              url="https://x.com/kazu_________77?s=21"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              url="https://www.facebook.com"
              style={{ height: 30, width: 30 }}
              className="pointer-events-none"
            />
            <SocialIcon
              network="instagram"
              url="https://www.instagram.com/"
              style={{ height: 30, width: 30 }}
              className="pointer-events-none"
            />
          </div>
         
          <div className="text-center md:text-right">
            <h4>&copy; 2024 HirelyAI | Kasuni Madhushika</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
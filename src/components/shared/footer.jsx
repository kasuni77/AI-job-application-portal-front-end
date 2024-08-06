import { Separator } from "@/components/ui/separator";
import React from "react";
import { SocialIcon } from "react-social-icons";
import logo from "../../../public/assets/home/logo.png";

function Footer() {
  return (
    <div className="py-10 footer">
      <Separator />
      <br />
      <div className="flex items-center justify-between px-20">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Hirely AI Logo" className="h-24" />
        </div>
        <div className="flex-1 flex justify-center space-x-4">
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
          />
          <SocialIcon
            network="instagram"
            url="https://www.instagram.com/"
            style={{ height: 30, width: 30 }}
          />
        </div>
        <div className="text-right">
          <h4>&copy; 2024 HirelyAI | Kasuni Madhushika</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
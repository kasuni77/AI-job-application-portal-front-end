import { Separator } from "@/components/ui/separator";
import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="py-10">
      <Separator />
      <br />
      <div className="py-3 justify-between flex">
        <h4 className="">@Kasuni Madhushika</h4>
      </div>
      <div>
        <div className="flex space-x-4">
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
      </div>
    </div>
  );
}

export default Footer;

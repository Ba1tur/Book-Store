import React from "react";
import s from "./Footer.module.scss";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <p>BookStore Project</p>

      <Image
        src="/SocialMedias.svg"
        alt="socialmedia"
        width={203}
        height={56}
      />

      <span>by eduarda mirelly</span>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import React from "react";
import { PiBookmarkSimpleBold, PiShoppingCartSimpleThin } from "react-icons/pi";
import s from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Image src="/LOGO.svg" alt="logo.svg" width={125} height={25} />
      <div className={s.header__buttons}>
        <Image src="/BOOKMARK_SIMPLE.svg" alt="logo.svg" width={20} height={21} />
        <Image src="/SHOPPING_CART.svg" alt="logo.svg" width={25} height={22} />
      </div>
    </header>
  );
};

export default Header;

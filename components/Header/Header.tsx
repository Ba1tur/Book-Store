import Image from "next/image";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure, Button } from "@chakra-ui/react";
import s from "./Header.module.scss";
import Basket from "../Basket/Basket";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { basketSlice } from "@/redux/reducers/basket";

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();
  const router = useRouter()

  const {basket} = useAppSelector(state => state.basketReducer)
  const {AddCart} = basketSlice.actions;
  const dispatch = useAppDispatch()


  return (
    <header className={s.header}>
      <Image
        onClick={() => router.push('/')}
        src="/LOGO.svg"
        alt="logo.svg"
        width={125}
        height={25}
      />
      <div className={s.header__buttons}>
        <Image
          src="/BOOKMARK_SIMPLE.svg"
          alt="logo.svg"
          width={20}
          height={21}
        />
        <Image
          ref={btnRef}
          onClick={onOpen}
          src="/SHOPPING_CART.svg"
          alt="logo.svg"
          width={25}
          height={22}
        />
        <Drawer isOpen={isOpen} placement="right" size={"sm"} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Basket />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;

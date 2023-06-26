import React from "react";
import s from "./Title.module.scss";
import Image from "next/image";

interface TitleProps {
	img: string;
	name: string;
}


const Title : React.FC<TitleProps> = ({img , name} ) => {
  return (
    <div className={s.title}>
      <Image
        src={img}
        alt="folder.png"
        width={30}
        height={23}
      />
      <h1>{name}</h1>
    </div>
  );
};

export default Title;

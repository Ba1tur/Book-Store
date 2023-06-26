import React from "react";
import s from "./Hero.module.scss";
import Image from "next/image";
import MyInput from "../UI/MyInput/MyInput";

const Hero = () => {
  return (
    <section className="container">
      <main className={s.hero_section}>
        <div className={s.hero_section__main}>
          <div className={s.hero_section__main__block}>
            <h1>What book you looking for?</h1>
            <Image
              src="/book-gif.svg"
              alt="book.svg"
              width={141}
              height={141}
            />
          </div>
          <p>Explore our catalog and find your next read.</p>
          <MyInput placeholder="Type the name of book or author..." />
          <button>
            Explore
            <Image
              src="/Binoculars.svg"
              alt="binokle.png"
              width={26}
              height={21}
            />
          </button>
        </div>
        <div className={s.hero_section__img_block}>
          <Image src="/Hero.jpg" alt="hero.jpg" width={484} height={503} />
        </div>
      </main>
    </section>
  );
};

export default Hero;

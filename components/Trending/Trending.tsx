import React from "react";
import s from "./Trending.module.scss";
import Image from "next/image";
import BooksCardImg from "../BooksCardImg/BooksCardImg";

const Trending: React.FC = () => {
  return (
    <section className="container">
      <div className={s.trending_container}>
			<h1>Trending Books</h1>
			<div className={s.trengind_container__title}>
				<Image src='/Sparkle.svg' alt="sparkle.svg" width={18} height={18}/>
				<p>Drag to explore</p>
			</div>
			<main className={s.trending_container__block}>
				<BooksCardImg/>
			</main>
		</div>
    </section>
  );
};

export default Trending;

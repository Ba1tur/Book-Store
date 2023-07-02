import React from "react";
import s from "./CategoriesBooks.module.scss";
import Title from "../Title/Title";
import BooksCard from "../BooksCard/BooksCard";
import { products } from "@/constants/products";

const CategoriesBooks = () => {
  return (
    <section className="container">
      <div className={s.categories_books_section}>
        <Title img="/PATH.svg" name="Romance" />
		  <div className={s.categories_books_section__block}>
			{products.map((product) => {
				return (
					<BooksCard product={product}   />
				)
			})}
		  </div>
      </div>
    </section>
  );
};

export default CategoriesBooks;

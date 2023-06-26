import React from "react";
import s from "./CategoriesBooks.module.scss";
import Title from "../Title/Title";

const CategoriesBooks = () => {
  return (
    <section className="container">
      <div className={s.categories_books_section}>
        <Title img="/PATH.svg" name="Romance" />
		  <div>
			
		  </div>
      </div>
    </section>
  );
};

export default CategoriesBooks;

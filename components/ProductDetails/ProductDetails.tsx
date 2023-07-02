import React, { useEffect, useState } from "react";
import s from "./ProductDetails.module.scss";
import Image from "next/image";
import Title from "../Title/Title";
import BooksCard from "../BooksCard/BooksCard";
import { useRouter } from "next/router";
import { products } from "@/constants/products";
import { IProduct } from "@/models/IProduct";

const Product: React.FC = () => {
  const { query } = useRouter();
  console.log(query.id);

  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    const mappProducts = products.find(function (item) {
      return item.id === query.id;
    });
    setProduct(mappProducts)
  }, []);

  return (
    <section className="container">
      <div className={s.products_details_section}>
        <div className={s.products_details_section__img}>
          <img  src={product?.img}  alt="book" width={280} height={417} />
        </div>
        <div className={s.products_details_section__about}>
          <div className={s.products_details_section__about__header}>
            <h1>{product?.name}</h1>
            <button>
              <Image
                src="/BOOKMARK_SIMPLE.svg"
                alt="bookmark_simple"
                width={17}
                height={17}
              />
            </button>
          </div>
          <div className={s.products_details_section__about__name}>
            {product?.author}
          </div>
          <div className={s.products_details_section__about__description}>
            {product?.description}
          </div>
          <div className={s.products_details_section__about__footer}>
            <div
              className={s.products_details_section__about__footer__price_block}
            >
              <p>${product?.price}</p>
            </div>
            <div className={s.products_details_section__about__footer__buttons}>
              <button>
                <Image
                  src="/SHOPPING_CART.svg"
                  alt="logo.svg"
                  width={25}
                  height={22}
                />
              </button>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className={s.products_details__footer}>
        <Title img="/PATH.svg" name="View More" />
        <div className={s.products_details__footer__block}>
          {products.map((product) => {
            return (
              <BooksCard
                product={product}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;

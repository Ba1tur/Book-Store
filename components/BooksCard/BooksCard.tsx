import React from "react";
import s from "./BooksCard.module.scss";
import Image from "next/image";
import { IProduct } from "@/models/IProduct";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { basketSlice } from "@/redux/reducers/basket";

interface Product {
  product: IProduct;
}

const BooksCard: React.FC<Product> = ({ product }) => {
  const router = useRouter();
  const { basket } = useAppSelector((state) => state.basketReducer);
  const { AddCart } = basketSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className={s.books_card}>
      <div className={s.books_card__img}>
        <img
          onClick={() => router.push(`/product/${product.id}`)}
          src={product.img}
          alt="cover_book.png"
          width={200}
          height={298}
        />
      </div>
      <div className={s.books_card__block}>
        <div className={s.books_card__block__price}>${product.price}</div>
        <button className={s.books_card__block__favorite}>
          <Image
            src="/BOOKMARK_SIMPLE.svg"
            alt="bookmark_simple"
            width={20}
            height={20}
          />
        </button>
      </div>
      <button className={s.books_card__cart}>
        <Image
          src="/SHOPPING_CART.svg"
          alt="SHOPPING_CART.png"
          width={30}
          height={30}
          onClick={() => dispatch(AddCart(product))}
        />
      </button>
    </div>
  );
};

export default BooksCard;

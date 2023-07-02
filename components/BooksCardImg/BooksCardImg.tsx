import React, { useState } from "react";
import s from "./BooksCardImg.module.scss";
import Image from "next/image";
import { products } from "@/constants/products";
import { IProduct } from "@/models/IProduct";
import { useRouter } from "next/router";

const BooksCardImg: React.FC = () => {
  const [product, setProduct] = useState<IProduct[]>(products);

  const router = useRouter()
  return (
    <>
      {product.map((item) => {
        return (
          <div onClick={() => router.push(`/product/${item.id}`)} className={s.books_card}>
            <img
              key={item.id}
              src={item.img}
              alt="cover_book.png"
              width={200}
              height={289}
            />
          </div>
        );
      })}
    </>
  );
};

export default BooksCardImg;

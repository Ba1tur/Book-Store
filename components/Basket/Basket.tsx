import React, { useEffect , useState} from "react";
import s from "./Basket.module.scss";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { IProduct } from "@/models/IProduct";
import { CircularProgress } from "@chakra-ui/react";
import { basketSlice } from "@/redux/reducers/basket";

const Basket = () => {

  const [basketRender, setBasketRender] = useState<IProduct[]>([]);
  const { basket , isLoading , error} = useAppSelector((state) => state.basketReducer);
  const dispatch = useAppDispatch()
  const { AddCart , RemoveCart } = basketSlice.actions;

  useEffect(() => {
    setBasketRender(basket)
  },[AddCart , RemoveCart , dispatch])

  console.log(basket);
  

  return (
    <div className={s.basket}>
      <h3>
        Your Cart <mark>(02 items)</mark>{" "}
      </h3>
      <div className={s.basket__cards}>
        {isLoading && <CircularProgress isIndeterminate color='green.300' />}
        {error && <h1>Ошибка при загруске</h1>}
        {basketRender.length !== 0 ?  basketRender.map((product) => {
          return (
            <div key={product.id} className={s.basket__cards__card}>
              <img
                src={product.img}
                alt="cover_book.png"
                width={100}
                height={148}
              />
              <div className={s.basket__cards__card__content}>
                <div className={s.basket__cards__card__content__header}>
                  <h4>
                    {product.name}<br /> <span>{product.author}</span>
                  </h4>
                  <p>${product.price}</p>
                </div>
                <div className={s.basket__cards__card__content__footer}>
                  <div>1</div>
                  <Image
                    onClick={() => dispatch(RemoveCart(product.id))}
                    src="/TRASH.svg"
                    width={31}
                    height={32}
                    alt="trash.svg"
                  />
                </div>
              </div>
            </div>
          );
        }) : <h1>Нету книг в корзине</h1>}
      </div>
    </div>
  );
};

export default Basket;

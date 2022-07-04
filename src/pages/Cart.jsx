import React, { useEffect, useState } from "react";
import Demo2 from "../Demo2";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Helmet from "../components/Helmet";
import CartItem from "../components/CartItem";
import Button from "../components/Button";

import productData from "../assets/fake-data/products";
import numberWithCommas from "../utils/numberWithCommas";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems)
  );

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);

  return (
    <Helmet title="Корзина">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <div className="tx">
              <div className="cart__info__price">
                <span className="oo"> Находится в корзине : </span>
                <span className="line-1">----------------</span>
                <span className="pri">{totalProducts} вeши </span>
              </div>
            </div>

            <div className="cart__info__price">
              <span className="oo">Общая сумма :</span>{" "}
              <span className="line">-------------------------</span>
              <span className="pri">
                {numberWithCommas(Number(totalPrice))} сoм
              </span>
            </div>
          </div>
          <section className="bt">
            <div className="cart__info__btn">
              <NavLink to="/catalog">
                <Button size="block"> Вернуться назад </Button>
              </NavLink>
            </div>
            <div className="cart__info__btn">
              <NavLink to="/catalog">
                <Button size="block">Oформить заказ</Button>
              </NavLink>
            </div>
            <Demo2 />
          </section>
        </div>
        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;

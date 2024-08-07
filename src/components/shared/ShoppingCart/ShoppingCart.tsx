"use client";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { ShoppingCartItem } from "./ShoppingCartItem";
import styles from './ShoppingCart.module.sass'
import { handleCreateCart } from "app/actions/index";

export default function ShoppingCart() {
  const { cart } = useShoppingCart();
  const [isBuying, setIsBuying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const hasItems = cart.length > 0;

  const handleOpen = () => {
    if (hasItems) {
      setIsOpen(!isOpen)
    }
  };

  const handleBuy = async() => {
    try {
      setIsBuying(true)
      const checkoutURL = await handleCreateCart(cart)

      if(!checkoutURL) throw new Error("Error creating checkout")

      window.localStorage.removeItem('cart')
      window.location.href = checkoutURL
    } catch (error) {
      console.error(error)
    } finally {
      setIsBuying(false)
    }
  };


  return (
    <div className={styles.ShoppingCart}>
      {
        hasItems && (
          <span className={styles.ShoppingCart__counter}>
            {cart.length}
          </span>
        )
      }
      <button className={styles.ShoppingCart__cart} onClick={handleOpen}>
        <FaShoppingCart />
      </button>
      {isOpen && hasItems && (
        <div className={styles.ShoppingCart__items} >
          {
            cart.map((item: any) => (<ShoppingCartItem key={item.id} item={item} />))
          }
          <button className={styles.ShoppingCart__buyButton} disabled={isBuying} onClick={handleBuy}>
            Buy
          </button>
        </div>
      )}
    </div>
  )
}
import React from "react";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 23.99 }].map((item) => (
        <div>{item.name}</div>
      ))}
      ;
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={styles.total}>
        <div>Total Amount</div>
        <div>{props.price}</div>
      </div>
      <div className={styles.actions}>
        <div className={styles["button--alt"]}>Close</div>
        <div className={styles.button}>Order</div>
      </div>
    </div>
  );
};

export default Cart;

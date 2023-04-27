import React from "react";
import styles from "./Cart.module.css";

const Cart = (props) => {
  return(
    <div className={styles['cart-items']}>
        <div className={styles.total}></div>
        <div className={styles.actions}></div>
    </div>
  );
};

export default Cart;

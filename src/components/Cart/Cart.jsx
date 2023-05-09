import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  let totalPrice = 0;

  const cartList = (
    <ul className={styles["cart-items"]}>
      {props.addOrderedItem.map((item) => {
        totalPrice += item[0].price * item[0].amount;
        const randomKey = Math.random().toString(36).substr(2, 9);
        return (
          <div className={styles.items} key={`${item[0].id}-${randomKey}`}>
            <div className={styles['price-right']}>
              <div>{`${item[0].name}`}</div>
              <div>{`${item[0].price.toFixed(2)}$`}</div>
            </div>
            <div className={styles['price-left']}>
              <div className={styles.amount}>{`x ${item[0].amount}`}</div>
              <div>{`${(item[0].amount * item[0].price).toFixed(2)}$`}</div>
            </div>
          </div>
        );
      })}
    </ul>
  );

  return (
    <Modal onConfirm={props.onConfirm}>
      {cartList}
      <div className={styles.total}>
        <div>Total Amount</div>
        <div>{`${totalPrice.toFixed(2)} $`}</div>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onConfirm}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

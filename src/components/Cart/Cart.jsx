import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const orderHandler = (event) => {
    console.log(props.addOrderedItem);
  };

  let totalPrice = 0;

  const cartList = (
    <ul className={styles["cart-items"]}>
      {props.addOrderedItem.map((item) => {
        totalPrice += item[0].price * item[0].amount;
        return (
          <div className={styles.items}>
            <div>{`${item[0].amount} x ${item[0].name}`}</div>
            <div>{`${item[0].price}$`}</div>
            <div>{`${item[0].amount * item[0].price}$`}</div>
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
        <div>{`${(totalPrice).toFixed(2)} $`}</div>
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

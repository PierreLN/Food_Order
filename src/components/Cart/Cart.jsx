import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const orderHandler = (event) => {
    console.log(props.addOrderedItem);
  };

  const cartList = <ul className={styles["cart-items"]}>
    {(props.addOrderedItem).map((item) => (
      <div className={styles.items}>
        <div>{item[0].name}</div>
        <div>{`${item[0].price}$`}</div>
      </div>
    ))}
  </ul>

  return (
    <Modal onConfirm={props.onConfirm}>
      {cartList}
      <div className={styles.total}>
        <div onClick={orderHandler}>Total Amount</div>
        <div>{`${"32"} $`}</div>
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

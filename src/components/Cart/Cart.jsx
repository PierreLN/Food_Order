import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 23.99 }].map((item) => (
        (<div className={styles.items}>
          <div>{item.name}</div>
          <div>{`${item.price}$`}</div>
        </div> )
      ))}
    </ul>
  );

  return (
    <Modal onConfirm={props.onConfirm}>
      {cartItems}
      <div className={styles.total}>
        <div>Total Amount</div>
        <div>{`${'32'} $`}</div>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onConfirm} >Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

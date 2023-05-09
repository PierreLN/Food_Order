import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import Meals from "../Meals/Meals";

const Cart = (props) => {
  // const orderHandler = (event) => {
  //   console.log(event);
  // };

  // const cartList = <Meals orderList={orderHandler}></Meals>;

  //   <ul className={styles["cart-items"]}>
  //   {orderList.map((item) => (
  //     <div className={styles.items}>
  //       <div>{item.name}</div>
  //       <div>{`${item.price}$`}</div>
  //     </div>
  //   ))}
  // </ul>

  return (
    <Modal onConfirm={props.onConfirm}>
      <div className={styles.total}>
        <div>Total Amount</div>
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

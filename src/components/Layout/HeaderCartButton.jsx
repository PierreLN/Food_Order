import { Fragment, useState, useEffect } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Modal from "../UI/Modal";
import Cart from "../Cart/Cart";

const HeaderCartButton = (props) => {
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(props.addOrderedItem.length)


  const orderingHandler = (props) => {
    setAdded(true);
  };

  const modalOff = () => {
    setAdded(false);
  };

  useEffect(() => {
    setQuantity(props.addOrderedItem.length)
  }, [props.addOrderedItem.length])

  return (
    <Fragment>
      {added && (
        <Cart onConfirm={modalOff} addOrderedItem={props.addOrderedItem}></Cart>
      )}
      <button className={styles.button} onClick={orderingHandler}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{quantity}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;

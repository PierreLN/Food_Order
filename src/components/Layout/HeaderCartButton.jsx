import { Fragment, useState, useEffect } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Modal from "../UI/Modal";
import Cart from "../Cart/Cart";

const HeaderCartButton = (props) => {
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(props.addOrderedItem.length);
  const [btnBump, setBtnBump] = useState(false);

  const orderingHandler = (props) => {
    setAdded(true);
  };

  const modalOff = () => {
    setAdded(false);
  };

  let btnStyles = `${styles.button} ${btnBump ? styles.bump : ""}`;

  useEffect(() => {
    const numberItem = () => {
      let totalItems = 0;
      props.addOrderedItem.forEach((element) => {
        totalItems += element[0].amount;
      });
      return totalItems;
    };
    setQuantity(numberItem);
  }, [props.addOrderedItem]);

  useEffect(() => {
    if (props.addOrderedItem.length === 0) {
      return;
    }
    setBtnBump(true);

    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);

    return () => {clearTimeout(timer)}; // Cleaner for timeOut
  }, [props.addOrderedItem]);

  return (
    <Fragment>
      {added && (
        <Cart onConfirm={modalOff} addOrderedItem={props.addOrderedItem}></Cart>
      )}
      <button className={btnStyles} onClick={orderingHandler}>
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

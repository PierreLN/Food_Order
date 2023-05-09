import { Fragment, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Modal from "../UI/Modal";
import Cart from "../Cart/Cart";

const HeaderCartButton = (props) => {
  const [added, setAdded] = useState(false);
  const [products, setProduct] = useState(0)

  const orderingHandler = (props) => {
    setAdded(true);
  };

  const modalOff = () => {
    setAdded(false);
  };
  return (
    <Fragment>
      {added && (
        <Cart
          onConfirm={modalOff}
          addOrderedItem={props.addOrderedItem}
        ></Cart>
      )}
      <button className={styles.button} onClick={orderingHandler}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{products}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;

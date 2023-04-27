import { Fragment, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Modal from "../UI/Modal";

const HeaderCartButton = (props) => {
  const [added, setAdded] = useState(false);

  const orderingHandler = (props) => {
    setAdded(true);
  };

  const modalOff = () => {
    setAdded(false);
  };
  return (
    <Fragment>
      {added && (
        <Modal
          title="Ordering ..."
          message="incomming..."
          onConfirm={modalOff}
        ></Modal>
      )}
      <button className={styles.button} onClick={orderingHandler}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>3</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;

import { Fragment } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import images from "../../images/meals.jpg";

const Hearders = (props) => {

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Meals Service</h1>
        <HeaderCartButton addOrderedItem={props.addOrderedItem}></HeaderCartButton>
      </header>
      <div className={styles['main-image']}>
        <img src={images} alt="meal" />
      </div>
    </Fragment>
  );
};

export default Hearders;

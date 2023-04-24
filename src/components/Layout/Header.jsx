import { Fragment } from "react";
import styles from "./Headers.module.css";
import HeaderCartButton from "./HeaderCartButton";
import images from "../../assets/meals.jpg";

const Hearders = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={styles['main-image']}>
        <img src={images} alt="meal" />
      </div>
    </Fragment>
  );
};

export default Hearders;

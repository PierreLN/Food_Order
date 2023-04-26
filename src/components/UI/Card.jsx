import { Fragment } from "react";
import styles from "./Card.module.css";
import cx from "classnames";

const Card = (props) => {
  const classes = cx(styles.card, props.className);
  return <Fragment className={classes}>{props.children}</Fragment>;
};

export default Card;

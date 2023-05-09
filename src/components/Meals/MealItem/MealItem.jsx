import styles from "./MealItem.module.css";
import Card from "../../UI/Card";
import MealItemForm from "./MealItemForm";
import React, { useState, useEffect } from "react";

const MealItem = (props) => {
  const pricing = `$${props.price}`;


  const onAmoundChange = (data) => {
    const productAdded = [
      { id: props.id, name: props.name, price: props.price, amount: +data},
    ];
    props.onOrder(productAdded);
  };

  return (
    <li>
      <Card className={styles.meal} key={props.id}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{pricing}</div>
        </div>
        <MealItemForm
          onAmoundChange={onAmoundChange}
          id={props.id}
          name={props.name}
          price={props.price}
        ></MealItemForm>
      </Card>
    </li>
  );
};

export default MealItem;

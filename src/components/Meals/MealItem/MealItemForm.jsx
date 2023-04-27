import React, { useState } from "react";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);

  const enteredData = (event) => {
    setAmount(event.target.value);
    console.log(amount)
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.amountAdded(amount)
    setAmount(1)
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label>Amount</label>
      <input value={amount} onChange={enteredData}></input>
      <button type='submit'>+Add</button>
    </form>
  );
};

export default MealItemForm;

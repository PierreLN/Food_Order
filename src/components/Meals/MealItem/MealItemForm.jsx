import React, { Fragment, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input.jsx";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);

  const enteredData = (event) => {
    setAmount(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.amountAdded(amount);
    setAmount(1);
  };

  return (
    <Fragment>
      <form className={styles.form} onSubmit={submitHandler}>
        <Input
          label="Amount"
          input={{
            id: "Amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
            value: amount,
            onChange: enteredData,
          }}
        ></Input>
        <button type="submit">+Add</button>
      </form>
    </Fragment>
  );
};

export default MealItemForm;

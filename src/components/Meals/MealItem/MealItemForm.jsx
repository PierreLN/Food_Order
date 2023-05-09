import React, { Fragment, useState, useRef } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input.jsx";

const MealItemForm = (props) => {

  const itemRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAmoundChange(itemRef.current.value);
    itemRef.current.value = 1;
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
            defaultValue: '1',
            ref: itemRef,
          }}
        ></Input>
        <button type="submit">+Add</button>
      </form>
    </Fragment>
  );
};

export default MealItemForm;

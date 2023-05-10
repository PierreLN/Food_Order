import { useState, Fragment, useEffect } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  const [mealOrderList, setMealOrderList] = useState([]);

  const listHandler = (newData) => {
    setMealOrderList((previousData) => {
      const updatedDate = [newData, ...previousData]
      return updatedDate;
    });
  };

  useEffect(() => {
    props.orderList(mealOrderList)
  }, [mealOrderList, props])

  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvailableMeals onOrder={listHandler}></AvailableMeals>
    </Fragment>
  );
};

export default Meals;

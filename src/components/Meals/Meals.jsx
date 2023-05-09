import { useState, Fragment, useEffect } from "react";
import AvailableMeals from "./AvailableMeals";
// import MealsSummary from "./MealsSummery";

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
      <AvailableMeals onOrder={listHandler}></AvailableMeals>
      {/* <MealsSummary></MealsSummary> */}
    </Fragment>
  );
};

export default Meals;

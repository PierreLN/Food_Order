import { useState, Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
// import MealsSummary from "./MealsSummery";

const Meals = (props) => {
  const [mealOrderList, setMealOrderList] = useState([]);

  const listHandler = (newData) => {
    setMealOrderList((previousData) => {
      return [newData, ...previousData];
    });
    // props.orderList(mealOrderList);
  };

  return (
    <Fragment>
      <AvailableMeals onOrder={listHandler}></AvailableMeals>
      {/* <MealsSummary></MealsSummary> */}
    </Fragment>
  );
};

export default Meals;

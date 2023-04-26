import { Fragment} from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummery";
import Card from "../UI/Card";

const Meals = () => {
    return (
        <Fragment>
            <AvailableMeals></AvailableMeals>
            {/* <MealsSummary></MealsSummary> */}
        </Fragment>
    )
}

export default Meals;
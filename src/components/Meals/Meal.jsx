import { Fragment} from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummery";

const Meals = () => {
    return (
        <Fragment>
            <AvailableMeals></AvailableMeals>
            <MealsSummary></MealsSummary>
        </Fragment>
    )
}

export default Meals;
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Salmon and avocado",
    price: 55.00,
  },
  {
    id: "m2",
    name: "Pizza",
    description: "Italian specialty!",
    price: 16.49,
  },
  {
    id: "m3",
    name: "5 guy's Burger",
    description: "faaty meaty with fries",
    price: 21.99,
  },
  {
    id: "m4",
    name: "Poke Bowl",
    description: "Healthy green stuffs",
    price: 77.77,
  },
];

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      onOrder={props.onOrder}
    ></MealItem>
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

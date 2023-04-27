import styles from "./MealItem.module.css";
import Card from "../../UI/Card";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const amountAdded = (event) => {
    console.log(event)
  }

  return (
    <li>
      <Card className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <MealItemForm amountAdded={amountAdded}></MealItemForm>
      </Card>
    </li>
  );
};

export default MealItem;

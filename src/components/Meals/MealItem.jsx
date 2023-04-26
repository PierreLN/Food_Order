import styles from './MealItem.module.css'
import Card from '../UI/Card';

const MealItem = (props) => {

    return (<li>
        <Card className={styles.meal}>
            <h3>{props.name}</h3>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.price}>{props.price}</div>
            <div>
                Amount
                <input></input>
                <button>+Add</button>
            </div>
        </Card>
    </li>)
}

export default MealItem;
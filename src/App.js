import { useState, Fragment } from "react";
import Hearders from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App(props) {
  const [addOrderedItem, setAddOrderedItem] = useState([]);

  const orderList = (items) => {
    setAddOrderedItem(items);
  };

  return (
    <Fragment>
      <Hearders addOrderedItem={addOrderedItem}></Hearders>
      <div className="main-background">
        <main>
          <Meals orderList={orderList} />
        </main>
      </div>
    </Fragment>
  );
}

export default App;

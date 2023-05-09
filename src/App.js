import { Fragment } from "react";
import Hearders from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const orderedItems = (event) => {
    console.log(event);
  }

  return (
    <Fragment>
      <Hearders></Hearders>
      <div className="main-background">
        <main>
          <Meals orderedItems={orderedItems}/>
        </main>
      </div>
    </Fragment>
  );
}

export default App;

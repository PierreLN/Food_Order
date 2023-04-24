import { Fragment } from "react";
import Hearders from "./components/Layout/Header";
import Meals from "./components/Meals/Meal";

function App() {
  return (
    <Fragment>
      <Hearders></Hearders>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;

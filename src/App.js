import { Fragment } from "react";
import Hearders from "./components/Layout/Header";
import Meals from "./components/Meals/Meal";

function App() {
  return (
    <Fragment>
      <Hearders></Hearders>
      <div className="main-background">
        <main>
          <Meals />
        </main>
      </div>
    </Fragment>
  );
}

export default App;

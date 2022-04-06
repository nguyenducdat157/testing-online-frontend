import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Demo from "./pages/Demo";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/demo"} component={Demo} />
    </Switch>
  );
};

const Routing = function createRouting() {
  return (
    <Router>
      <div>{Routes()}</div>
    </Router>
  );
};

export default Routing;

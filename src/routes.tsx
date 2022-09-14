import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "src/pages/Dashboard";
import { Paths } from "src/utils/contants";
import Demo from "./pages/Demo";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/demo"} component={Demo} />
      <Route exact path={Paths.Home} component={Dashboard} />
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

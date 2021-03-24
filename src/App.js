import "./App.css";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import DetailedJob from "./DetailedJob";
import Homepage from "./Homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route exact path={"/:id"} component={DetailedJob} />
      </Switch>
    </Router>
  );
}

export default App;

import "./App.css";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import DetailedJob from "./components/DetailedJob/DetailedJob";
import Homepage from "./components/Homepage/Homepage";

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

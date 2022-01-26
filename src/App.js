import { Router, Route, Switch } from "react-router-dom";
import history from "./Helpers/history";
import NodeList from "./Components/NodeList";


function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={NodeList}/>
      </Switch>
    </Router>
  );
}

export default App;

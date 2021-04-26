import "./App.css";
import Login from "../src/pages/Login/Login";
import Header from "../src/layout/Header/Header";
import Main from "../src/layout/Main/Main";
import BottomLeft from "../src/components/BottomLeft/BottomLeft";
import ProtradeHome from "../src/pages/ProtradeHome/ProtradeHome";
import ProtradeProperties from "../src/pages/ProtradeProperties/ProtradeProperties";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Header/>
      <Switch>
        <Route path="/tai-san">
          <ProtradeProperties/>
        </Route>
        <Route path="/">
          <ProtradeHome/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

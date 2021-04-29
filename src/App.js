import "./App.css";
import Login from "../src/pages/Login/Login";
import Header from "../src/layout/Header/Header";
import ProtradeHome from "../src/pages/ProtradeHome/ProtradeHome";
import ProtradeProperties from "../src/pages/ProtradeProperties/ProtradeProperties";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useCookies, Cookies} from "react-cookie";

function App() {

  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route path="/tai-san">
          <ProtradeProperties />
        </Route>
        <Route path="/trang-chu">
          <ProtradeHome />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

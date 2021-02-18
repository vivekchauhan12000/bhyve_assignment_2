
import './App.css';

import Register from "./auth/Registration";
import Login from "./auth/Login";
import Home from "./Home";
import Userinfo from "./auth/Userinfo"
import UserSkill from "./auth/Userskill"

import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/userinfo" component={Userinfo} />
      <Route exact path="/skill" component={UserSkill} />
      
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import IndexApp from "./Components/IndexApp";
import Intro from './Components/Intro'
import UseStateComponent from './Components/UseStateComponent'
import FnVsClass from "./Components/FnVsClass";
import CustomHooks from "./Components/CustomHooks";
import UseEffectComponent from "./Components/UseEffectComponent";
import DesuscribirUseEffect from "./Components/DesuscribirUseEffect";
import UseReducerComponent from "./Components/UseReducerComponent";
import UseReffComponent from "./Components/UseReffComponent";
import DropDownMenu from './Components/DropDownMenu'

import BackHome from './Components/BackHome'

function App() {

  return (
    <Router>
      <BackHome/>
        <Switch>
          <Route exact path="/" component={IndexApp} />
          <Route exact path="/intro" component={Intro} />
          <Route exact path="/useState" component={UseStateComponent} />
          <Route exact path="/fnvsclass" component={FnVsClass} />
          <Route exact path="/customHook" component={CustomHooks} />
          <Route exact path="/useEffect" component={UseEffectComponent} />
          <Route exact path="/desuscribir-useEffect" component={DesuscribirUseEffect} />
          <Route exact path="/useReducer" component={UseReducerComponent} />
          <Route exact path="/useReff" component={UseReffComponent} />
          <Route exact path="/dropdownmenu" component={DropDownMenu} />
        </Switch>
    </Router>

    
  );
}

export default App;


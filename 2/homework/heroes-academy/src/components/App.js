import React from "react";
import HeroesList from "./HeroesList";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import PageNotFound from "./PageNotFound";
import HeroDetails from "./HeroDetails";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Welcome}></Route>
        <Route path="/heroes" component={HeroesList}></Route>
        <Route path="/hero-details/:id" component={HeroDetails}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;

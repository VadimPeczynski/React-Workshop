import React from "react";
import HeroesList from "./HeroesList";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import PageNotFound from "./PageNotFound";
import HeroDetails from "./HeroDetails";
import HeroEdit from "./HeroEdit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer autoClose={3000} hideProgressBar />
      <NavBar />
      <Switch>
        <Route path="/" exact component={Welcome}></Route>
        <Route path="/heroes" component={HeroesList}></Route>
        <Route path="/hero-details/:id" component={HeroDetails}></Route>
        <Route path="/hero-edit/:id?" component={HeroEdit}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;

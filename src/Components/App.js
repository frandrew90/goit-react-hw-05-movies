import React from "react";
import { Switch, Route } from "react-router";
import Loader from "../Components/loader/Loader";
import HomeView from "../views/homeView/HomeView";
import Header from "./header/Header";
import MoviesView from "../views/moviesView/MoviesView";
import NotFoundView from "../views/notFoundView/NotFoundView";

const App = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>

        <Route exact path="/movies">
          <MoviesView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </>
  );
};

export default App;

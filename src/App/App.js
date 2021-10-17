import React, { Suspense, lazy } from "react";
// import { Switch, Route } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";

import HomeView from "../views/homeView/HomeView";
import Header from "../Components/header/Header";
import Loader from "../Components/loader/Loader";
import s from "./App.module.css";
const MoviesView = lazy(() =>
  import("../views/moviesView/MoviesView")
); /* webpackChunkName: "MoviesView"  */
const MovieDeteilsView = lazy(() =>
  import("../views/movieDeteils/MovieDeteilsView.js")
); /* webpackChunkName: "MovieDeteilsView"  */
const NotFoundView = lazy(() =>
  import("../views/notFoundView/NotFoundView")
); /* webpackChunkName: "NotFoundView"  */

const App = () => {
  return (
    <>
      <Header className={s.header} />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>

          <Route path="/movies/:movieID">
            <MovieDeteilsView />
          </Route>

          <Route exact path="/movies">
            <MoviesView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;

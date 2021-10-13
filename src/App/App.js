import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router";
import Loader from "../Components/loader/Loader";
import HomeView from "../views/homeView/HomeView";
import Header from "../Components/header/Header";
import MoviesView from "../views/moviesView/MoviesView";
import s from "./App.module.css";
const MoviesDeteilsPage = lazy(() =>
  import("../Components/movieDeteils/MovieDeteilsPage")
);
const NotFoundView = lazy(() => import("../views/notFoundView/NotFoundView"));

const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>

          <Route path="/movies/:movieID">
            <MoviesDeteilsPage />
          </Route>

          <Route exact path="/movies">
            <MoviesView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;

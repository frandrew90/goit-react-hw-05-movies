import React, { useState, useEffect } from "react";
import HomePage from "../../Components/homePage/HomePage";
import { getTrendingMovies } from "../../services/ApiService";
import s from "./HomeView.module.css";

const HomeView = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    getTrendingMovies().then((movies) => setTrendingMovies(movies));
  }, []);

  console.log(trendingMovies);

  return (
    <section>
      <h1 className={s.trendingTitle}>Trending today</h1>

      {trendingMovies && <HomePage trendingMovies={trendingMovies} />}
    </section>
  );
};

export default HomeView;

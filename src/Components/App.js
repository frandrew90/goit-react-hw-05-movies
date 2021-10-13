import React from "react";
import Loader from "../Components/loader/Loader";
import Navigation from "./navigation/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <h2>Loading...</h2>
      <Loader />
    </>
  );
};

export default App;

import React from "react";
import Loader from "react-loader-spinner";

export default class App extends React.Component {
  render() {
    return <Loader type="Watch" color="#00BFFF" height={120} width={120} />;
  }
}

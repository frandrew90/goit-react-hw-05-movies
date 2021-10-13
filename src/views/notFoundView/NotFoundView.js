import React from "react";
import error404 from "../../images/404error.png";

const NotFoundView = () => {
  return (
    <>
      <h1>404 Somthing went wrong... There is no page :( </h1>
      <img src={error404} alt="There is no page" width="800" height="600" />
    </>
  );
};

export default NotFoundView;

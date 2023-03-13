import React from "react";
import "./LoggedIn.css";

const LoggedIn = ({ setIsLoggedIn }) => {
  return (
    <div>
      <h1 className="title">You are now logged in!</h1>
      <button className="back_button" onClick={() => setIsLoggedIn(false)}>
        Welcome to the world of react
      </button>
    </div>
  );
};
export default LoggedIn;
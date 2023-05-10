import React from "react";
import Nav from "./components/Nav/Nav";
import "./App.css";
import {Outlet} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default App;

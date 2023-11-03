import React from "react";
import Nav from "./componets/Nav"
import './App.css';
import Header from "./componets/Header";

function App() {
  return (
    <div>
      <React.Fragment>
        <Header />
        <Nav />
      </React.Fragment>
    </div>
  );
}

export default App;

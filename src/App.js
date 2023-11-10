import React from "react";
import Nav from "./componets/Nav"
import Header from "./componets/Header";
import Main from "./componets/Main";
import './App.css';
import Footer from "./componets/Footer";

//import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <React.Fragment>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;

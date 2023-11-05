import React from "react";
import Nav from "./componets/Nav"
import Header from "./componets/Header";
import './App.css';
import Footer from "./componets/Footer";
//import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <React.Fragment>
      <Header />
        <Nav />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;

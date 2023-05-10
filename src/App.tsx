import React from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import You from "./components/You";
import Jacob from "./components/Jacob";
import Email from "./components/Email";
import Star from "./components/Star";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <Hero/>
        <You/>
        <Jacob/>
        <Email/>
        <Star/>
        <Footer/>
    </div>
  );
}

export default App;

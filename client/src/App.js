import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import SearchInput from "./components/SearchInput"
import Header from "./components/Header"


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header/>
        <SearchInput />
      </div>
    );
  }
}

export default App;
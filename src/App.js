import React, { Component } from "react";
import "./App.css";
import "./Components/Contact";
import Contact from "./Components/Contact";
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Conatct Manager" />
        <Contact
          name="Rishav Singh"
          email="rishavsingh107@gmail.com"
          phone="7007145610"
        />
        <Contact
          name="Arun Singh"
          email="apschauhan@gmail.com"
          phone="7897987897987"
        />
        <Contact
          name="Shashank Singh"
          email="shashank@gmail.com"
          phone="78971213484"
        />
      </div>
    );
  }
}

export default App;

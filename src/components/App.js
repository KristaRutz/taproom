import React from "react";
// import logo from ".././logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import KegControl from "./KegControl/KegControl";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <div className="container">
        <div className="pint"></div>
        <div className="pint-after"></div>
      </div>
      <div className="container">
        <div className="pintSmall"></div>
        <div className="pintSmall-after"></div>
      </div> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>krista's taproom</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <KegControl />
      <Footer />
    </div>
  );
}

export default App;

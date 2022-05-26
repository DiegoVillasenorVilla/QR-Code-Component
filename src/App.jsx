import React from "react";
//import logo from './logo.svg'
import "./App.css";
import qr from "./images/image-qr-code.png";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div>
          <img src={qr} className="qr-image" alt="QR code" />
        </div>

        <div className="text-container">
          <h1>Improve your front-end <br/>
            skills by building projects
          </h1>
          <p>
            Scan the QR code to visit Frontend <br/>
            Mentor and take your coding skills <br/>
            to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

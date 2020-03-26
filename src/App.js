import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { RangePicker } from "antd";

import Container from "./container";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const pRef = useRef(null);
  useEffect(() => {
    // ReactDOM.unmountComponentAtNode(pRef);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Container />
      </header>
    </div>
  );
}

export default App;

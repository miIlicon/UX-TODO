import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");

  useEffect(() => {
    fetch("/hello")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setMessage(message => [...message, data]);
        setMessage1(data[0]);
        setMessage2(data[1]);
      });
  }, []);

  const Test = () => {
    return (
      <div>
        {message1} <br />
        {message2}
      </div>)
  }

  return (
    <div className="App">
      <Test />
    </div>
  );
}

export default App;

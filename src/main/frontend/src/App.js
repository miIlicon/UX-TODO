import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import Cookies from 'js-cookie'

function App() {

  // const csrftoken = Cookies.get('csrftoken') // Cookies from Django Domain
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");

  useEffect(() => {
    // fetch("/hello")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     // setMessage(message => [...message, data]);
    //     setMessage1(data[0]);
    //     setMessage2(data[1]);
    //   });

    axios.get('/hello')
      .then((res) => {
        // console.log(res);
        console.log(res.data);
        setMessage1(res.data[0]);
        setMessage2(res.data[1]);
      })

    // axios({
    //   title: "제목",
    //   contents: "내용",
    //   url: '/hello',
    //   method: 'post',
    //   data: {
    //     name: 'veneas'
    //   }
    // })

    axios.post('/hello', {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        id: 1,
        date: "2022-12-16",
        content: "take a shower",
        state: false,
      },
    })
      .then((res) => {
        console.log("test");
      });
  }, []);

  // axios({
  //   url: '/hello',
  //   method: 'post',
  //   data: {
  //     title: "제목",
  //     contents: "내용",
  //   },

  // })

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

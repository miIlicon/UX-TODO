import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Main from "./component/Main";

function App() {

  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");

  useEffect(() => {

    axios.get('/hello')
      .then((res) => {
        // console.log(res);
        console.log(res.data);
        setMessage1(res.data[0]);
        setMessage2(res.data[1]);
      })

    /* axios('url', {
      내용물들
    },
    {
      headers: {
        'Content-Type': 'application/json',
      }
    })*/

    axios.post('/hello',
      JSON.stringify({
        id: 1,
        date: "2022-12-16",
        content: "take a shower",
        state: false,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
        console.log(res);
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
      <Main />
      {/* <Test /> */}
    </div>
  );
}

export default App;

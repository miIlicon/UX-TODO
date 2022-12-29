import "./App.css";
import Main from "./component/Main";

function App() {

  // useEffect(() => {

  //   /* axios('url', {
  //     내용물들
  //   },
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   })*/

  //   // axios.post('/hello',
  //   //   JSON.stringify({
  //   //     id: 1,
  //   //     date: "2022-12-16",
  //   //     content: "take a shower",
  //   //     state: false,
  //   //   }),
  //   //   {
  //   //     headers: {
  //   //       "Content-type": "applcation/json",
  //   //     },
  //   //   }
  //   // )
  //   //   .then((res) => {
  //   //     console.log(res);
  //   //   });
  // }, []);

  return (
    <div className="App">
      <Main />
      {/* <Test /> */}
    </div>
  );
}

export default App;

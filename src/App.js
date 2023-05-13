import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [myFact, setMyFact] = useState([]);

  useEffect(() => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => {
        console.log(res.data);
        setMyFact(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function refreshComponent() {
    // window.location.reload(false); // using vanilla JS
    axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data);
      setMyFact(res.data);
    });
  }

  return (
    <div>
      <h1>Fact by AP</h1>
      <h2 className="facts">{myFact.fact}</h2>
      <button className="refBtn" onClick={refreshComponent}>
        Refresh to get new fact
      </button>
    </div>
  );
}

export default App;

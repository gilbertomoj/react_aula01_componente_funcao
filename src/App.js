import './App.css';
import React , {useState} from "react";


export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container">
      <center><h1>Contador </h1></center>
      <center><h2>Você clicou {counter} vezes</h2></center>
      <center>
        <div className="buttons">
        <button onClick={()=>{ setCounter(counter + 1)}}>Descremento</button>
        <button onClick={()=>{ setCounter(counter - 1)}}>Incremento</button>
        </div>
      </center>
    </div>
  );
}

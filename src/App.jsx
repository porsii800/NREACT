import { useState } from "react";
import './App.css';

function App() {
  const [numero, setNumero] = useState(100);
  const [esconder, setEsconder] = useState(false);
  
 function handleMostrarEsconder(){
  esconder === true ? setEsconder(false) : setEsconder(true);
}

  return (
   <div>
    <h1>VALOR= {numero}</h1>
    <button onClick={handleMostrarEsconder}>{esconder === true ? "Mostrar" : "Esconder"} </button>
     {esconder === true }
    </div>
   

  );
  }


export default App;


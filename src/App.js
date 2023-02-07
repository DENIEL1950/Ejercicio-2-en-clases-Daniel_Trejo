import './App.css';
import Boton from './Components/Boton';
import { useState } from 'react';

import { evaluate } from 'mathjs';


function App() {
  const[valor, setValor] = useState("");
  const hacerClic=(texto) => {
  // console.log(texto);
  setValor(valor + texto);
  }

  //calcular con signo igual
  const calcularClic = () => {
    if(valor){
      setValor(evaluate(valor));
    }
    else{
      alert("Ingrese valores para realizar los calculos")
    }
    
  }
  //console.log("La operacion a calcular es: ", valor)

  return (
    <div className="App">
    <strong className='Calculadora'>LA CALCULADORA DE LA CHAMPIONS</strong>
     <div>
     <input className='texto' type="text" value={valor} readOnly/>
     </div>
     <div>
      <Boton className="boton" hacerClic={hacerClic}>1</Boton>
      <Boton className="boton" hacerClic={hacerClic}>2</Boton>
      <Boton className="boton" hacerClic={hacerClic}>3</Boton>
      <Boton className="boton2" hacerClic={hacerClic}>+</Boton>
     </div>
     <div>
      <Boton className="boton" hacerClic={hacerClic}>4</Boton>
      <Boton className="boton" hacerClic={hacerClic}>5</Boton>
      <Boton className="boton" hacerClic={hacerClic}>6</Boton>
      <Boton className="boton2" hacerClic={hacerClic}>-</Boton>
     </div>
     <div>
      <Boton className="boton" hacerClic={hacerClic}>7</Boton>
      <Boton className="boton" hacerClic={hacerClic}>8</Boton>
      <Boton className="boton" hacerClic={hacerClic}>9</Boton>
      <Boton className="boton2" hacerClic={hacerClic}>*</Boton>
     </div>
     <div>
     <Boton className="boton" hacerClic={hacerClic}>0</Boton>
     <Boton className="boton2" hacerClic={hacerClic}>.</Boton>
     <Boton className="boton2" hacerClic={hacerClic}>/</Boton>
     <Boton className="boton2" hacerClic={calcularClic}>=</Boton>
     
     </div>
     <div>
      <button className="boton3" onClick={() => setValor("")}>Clear</button>
     </div>
    </div>
  );
}

export default App;

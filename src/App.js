
import './App.css';
import { useState } from 'react';

function App() {
      const [count, setCount]=useState(0);
      const intrinsic= () =>{
         return setCount(count+1);
      }
      const bintrinsic= () =>{
        return setCount(count-1);
     }
     const tintrinsic= () =>{
      return setCount(0);
   }
  
  return (
    <div className="App" >
      <button id="a" onClick={intrinsic}>Increase</button>
      <button id="b" onClick={bintrinsic}>Decrease</button>
      <button  id="c" onClick={tintrinsic}>Set to Zero</button>
      {count}
    </div>
  );
}






export default App;

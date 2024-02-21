import logo from './logo.svg';
import './App.css';
//import Users from './Users.js'
import {useState} from 'react'
function App() {
  const[data,setData]=useState("piyush")
  function updateData(){
    setData("pk")
  }
  console.warn("____")
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>UpdateData </button>
    </div>
 
  );
}

export default App;

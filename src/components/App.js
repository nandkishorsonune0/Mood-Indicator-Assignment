import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
//   import "./styles.css";
// import {useState} from "react";
// export default function App() {
  const [color,setColor]= useState({
    c1:245,
    c2:241,
    c3:0
  })
  const handleChange=(e)=>{
    if(e.target.value === "2"){
      setColor({...color,c1:19,c2:0,c3:164});//19, 0, 164
    }else if(e.target.value === "3"){
      setColor({...color,c1:35,c2:177,c3:0});//(35, 177, 0)
    }
    else if(e.target.value === "4"){
      setColor({...color,c1:255,c2:0,c3:66});//(255, 0, 66)
    }
    else if(e.target.value === "1"){
      setColor({...color,c1:238,c2:241,c3:0});//(238, 241, 0)
    }
  }
  return (
    <div id="main">
    <select onChange={handleChange}>
      <option value="1">Happy</option>
      <option value="2">Sad</option>
      <option value="3">Sleepy</option>
      <option value="4">Excited</option>
    </select>
    <div id="mood-indicator" style={{backgroundColor:`rgb(${color.c1}, ${color.c2},${color.c3})`}}></div>
  </div>
  );
}
export default App;
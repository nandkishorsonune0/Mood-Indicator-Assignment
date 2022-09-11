import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [color,set_mood_colour]= useState({
    c1:245,
    c2:241,
    c3:0
  }) 
  const handleChange=(e)=>{
    if(e.target.value === "2"){
      set_mood_colour({...color,c1:19,c2:0,c3:164});
    }else if(e.target.value === "3"){
      set_mood_colour({...color,c1:35,c2:177,c3:0});
    }
    else if(e.target.value === "4"){
      set_mood_colour({...color,c1:255,c2:0,c3:66});
    }
    else if(e.target.value === "1"){
      set_mood_colour({...color,c1:238,c2:241,c3:0});
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
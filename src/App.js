import { useState } from "react";
import './App.css';
import react from 'react';
import React from 'react';

function App() {
  var [name, setName] = useState("Rainbow");

  function changeName(e) {
    setName(e.target.value);
  }

  return (
   <div>
     <a href="https://reactjs.org">Learn React</a>
     <h1>Hello {name}!</h1>

     <input type="text" onKeyUp={changeName} />
   </div>
  );
}

export default App;

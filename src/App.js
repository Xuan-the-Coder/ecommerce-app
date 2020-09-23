import React, { useState, useEffect } from "react";
import NavBar from './components/NavBar.js'

import './App.css';
import PersistentDrawerLeft from './components/Drawer'

function App() {
  const [categories , setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories.json").then(response => {
      response.json().then(data => {
        setCategories(data);
      })
    })
  }, [])

  return (

    <div className="App">
      <div>
        <PersistentDrawerLeft />
      </div>
    </div>
  );
}

export default App;

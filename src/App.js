import React, { useState, useEffect } from "react";
import NavBar from './components/NavBar.js'
import OutlinedPagination from './components/Pagination'
import './App.css';
import PersistentDrawerLeft from './components/Drawer'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import ProductList from "./components/ProductList.js";
import Product from "./pages/Product.js"
import NotFoundPage from './pages/NotFoundPage';

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

    <Router>



    <div className="App">
      <div>
        <Switch>
          <Route path="/" component={ProductList} exact />
          <Route path="/products-list" component={ProductList} />
          <Route path="/product/:id" component={Product} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <div>
        <OutlinedPagination />
      </div>
      <div>
        <PersistentDrawerLeft />
      </div>
    </div>
    </Router>
  );
}

export default App;

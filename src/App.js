import React, { Component } from "react";
import OutlinedPagination from './components/Pagination'
import './App.css';
import Registration from "./pages/Signup";
import Categories from './pages/Categories'
import CategoryProducts from './pages/CategoryProducts'
import { useState } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import ProductList from "./components/ProductList.js";
import Product from "./pages/Product.js"
import Signin from "./pages/Signin";
import { auth } from './firebase/utils'
import { Provider } from 'react-redux'
import store from './store'
import Cart from './components/Cart'
import About from './pages/About'
import Contact from './pages/Contact'

const initialState = {
  currentUser: null
}

class  App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...initialState
    }
  }

  authListener = null;

  componentDidMount(){
    this.authListener = auth.onAuthStateChanged(userAuth => {
      if (!userAuth) {
        this.setState({
          ...initialState
        })
      }

      this.setState({
        currentUser: userAuth
      })
    })
  }

  componentWillUnmount(){
    this.authListener()
  }

  render(){
    const { currentUser } = this.state

    return (
      <Provider store={store}>
      <Router>
  
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/all_products" render={() => (
              <ProductList currentUser={currentUser} />
            )} />
            <Route exact path="/" render={() => (
              <Categories currentUser={currentUser}/>
            )} />
            <Route path="/Signin" 
            render={() => currentUser ? <Redirect to="/"/>:(
              <Signin currentUser={currentUser}/>
            )} />
            <Route path="/Registration" render={() => (
              <Registration currentUser={currentUser}/>
            )} />
            <Route path="/product/:id" component={Product} />
            <Route path="/category_products/:id" component={CategoryProducts}/>
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
      </Router>
      </Provider>
    );
  }
}
  

export default App;

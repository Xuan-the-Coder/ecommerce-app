import React, { Component } from "react";
import OutlinedPagination from './components/Pagination'
import './App.css';
import Registration from "./pages/Signup";

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

      <Router>
  
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" render={() => (
              <ProductList currentUser={currentUser}/>
            )} />
            <Route path="/products-list" component={ProductList} />
            <Route path="/Signin" 
            render={() => currentUser ? <Redirect to="/"/>:(
              <Signin currentUser={currentUser}/>
            )} />
            <Route path="/Registration" render={() => (
              <Registration currentUser={currentUser}/>
            )} />
            <Route path="/product/:id" component={Product} />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}
  

export default App;

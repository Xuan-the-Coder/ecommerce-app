import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { auth, handleUserProfile } from './../firebase/utils'
import React, { Component } from 'react'
import { TextField } from '@material-ui/core';

const initialState = {
  displayName: '',
  email: '',
  passWord: '',
  confirmPassword: '',
  errors: []
}

class Form extends Component {

  constructor(props){
    super(props);
    this.state = {
      ...initialState
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })

  }

  handleFormSubmit = async event => {
    event.preventDefault()
    const { displayName, email, passWord, confirmPassword, errors } = this.state

    if(passWord !== confirmPassword ) {
      const err = ['Passowrd don\'t match']
      this.setState({
        errors: err
      })
      return
    }

    try{
      const { user}  = await auth.createUserWithEmailAndPassword(email, passWord)

      await handleUserProfile(user, { displayName })

      this.setState({
        ...initialState
      })
    }catch(err){

    }
  }

  render() {
    const { displayName, email, passWord, confirmPassword, errors } = this.state
    return (
      <div>
        {errors.length>0 && (
          <ul>
            {errors.map((err, index) => {
              return (
                <li key={index} style={{textDecoration:'none'}}>
                  {err}
                </li>
              )
            })}
          </ul>
        )}
              <form  noValidate autoComplete="off" onSubmit={this.handleFormSubmit} >
                  <div>
                      <TextField
                      id="standard-username-input"
                      label="User name"
                      type="username"
                      name="displayName"
                      value={displayName}
                      onChange={this.handleChange}
                      />
                  </div>
                  <div>
                      <TextField
                      id="standard-password-input"
                      label="Password"
                      type="passWord"
                      name="passWord"
                      autoComplete="current-password"
                      value={passWord} 
                      onChange={this.handleChange}
                      />
                  </div>
                  <div>
                      <TextField
                      id="standard-password-input"
                      label="Confirm password"
                      type="passWord"
                      name="confirmPassword"
                      autoComplete="current-password"
                      value={confirmPassword} 
                      onChange={this.handleChange}
                      />
                  </div>
                  <TextField id="standard-email" label="Email" name="email" type="email" value={email} onChange={this.handleChange}/>
                  <div style={{marginTop:40}}>
                  <Button  variant="contained" color="primary" type="submit">
                            Register
                  </Button>
                  </div>
              </form>
              </div>

    )
  }
}
export default Form
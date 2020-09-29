import Button from '@material-ui/core/Button';
import { auth, handleUserProfile } from './../firebase/utils'
import React, {Component} from 'react'
import { TextField } from '@material-ui/core';
import { signInWithGoogle } from './../firebase/utils'
import { Link } from 'react-router-dom'



const initialState = {
    email: '',
    password: ''
}
class FormSignin extends Component {
    constructor(props){
        super(props);
        this.state = {
          ...initialState
        }
      }

  handleSubmit = async event => {
    event.preventDefault()
    const { email, password} = this.state

    try{
        await auth.signInWithEmailAndPassword(email, password)
        this.setState({ 
            ...initialState
        })
    }catch(err){

    }
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })

  }
  render(){
    const { email, password} = this.state
    return (
      <div>
            <form  noValidate autoComplete="off" onSubmit={this.handleSubmit} >

                <div ><TextField id="standard-email" label="Email" name="email" type="email" value={email} onChange={this.handleChange} /></div>
                <div >
                      <TextField
                      id="standard-password-input"
                      label="Password"
                      type="passWord"
                      name="passWord"
                      autoComplete="current-password"
                      value={password} 
                      onChange={this.handleChange}
                      />
                </div>
                <div style={{marginTop:20, marginBottom:20}}><Button  variant="contained" color="primary" type="submit" onClick={signInWithGoogle}>
                        Login
                </Button></div>
                <div>
                <Button  variant="contained" color="primary" type="submit" onClick={signInWithGoogle}>
                        Sign in with Google
                </Button>
                </div>
                <div>
                    Not a user yet?
                    <Link to={`/Registration`} style={{textDecoration:'none', color: '#FFF'}} className="link" ><Button  color="primary">Sign Up</Button></Link>
                </div>
            </form>
        </div>

    )
  }
}
export default FormSignin
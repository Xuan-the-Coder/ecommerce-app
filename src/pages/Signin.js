import React from 'react';
import FormSignin from './../components/FormSignin'
import PersistentDrawerLeft from './../components/Drawer'



const Signin = props => {
      return (
        <div>
          <div>
            <PersistentDrawerLeft {...props}/>
          </div>
          <h2>Sign in</h2>
          <FormSignin />
        </div>
      )
}

export default Signin
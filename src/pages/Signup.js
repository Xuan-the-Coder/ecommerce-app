import React from 'react';
import Form from './../components/Form'
import PersistentDrawerLeft from './../components/Drawer'



export default function registration() {
      return (
        <div>
          <div>
            <PersistentDrawerLeft />
          </div>
          <h2>Signup</h2>
          <Form />

        </div>
      )
}
import React from "react";
import Form from "./../components/Form";
import PersistentDrawerLeft from "./../components/Drawer";

const Registration = (props) => {
  return (
    <div>
      <div>
        <PersistentDrawerLeft {...props} />
      </div>
      <h2>Signup</h2>
      <Form />
    </div>
  );
};

export default Registration;

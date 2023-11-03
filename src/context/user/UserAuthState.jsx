import React, { useState } from "react";
import UserAuthContext from "./UserAuthContext";

const UserAuthState = (props) => {
  const [isloggedin, setIsLoggedIn] = useState(false);

  const state = {
    isloggedin: isloggedin,
    setIsLoggedIn: setIsLoggedIn,
  };

  return (
    <UserAuthContext.Provider value={state}>
      {props.children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthState;

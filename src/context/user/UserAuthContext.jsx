import { createContext } from 'react';

const UserAuthContext = createContext({
  isloggedin: false,
  
});

export default UserAuthContext;

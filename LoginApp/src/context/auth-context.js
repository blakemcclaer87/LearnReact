import React, {useState, useEffect} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout  : () => {},
    onLogin   : () => {}
});

export const AuthContextProvider = (props) => {

    useEffect(() => {
        const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
    
        if(storedUserLoggedInInfo === '1'){
          console.log('loggedIn');
          setIsLoggedIn(true);
        }
      },
      [
      ]);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
      };
    
      const logoutHandler = () => {
        console.log('logging out');
        localStorage.setItem('isLoggedIn','0')
        setIsLoggedIn(false);
      };

    return (<AuthContext.Provider value={{
        isLoggedIn : isLoggedIn,
        onLogout   : logoutHandler,
        onLogin    : loginHandler
      }}>{props.children}</AuthContext.Provider>);
}

export default AuthContext;
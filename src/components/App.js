import React, { useEffect, useState } from 'react';

import AppRouter from 'components/Router';
import { authService } from 'fbase';

function App() {
  // console.log(authService.currentUser);
  // console.log(authService.curr);
  const [init, setInit] = useState(false);
  const [isLogginedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLogginedIn={isLogginedIn} /> : 'Init...'}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;

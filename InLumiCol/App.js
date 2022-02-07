import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import Main from './src/Main';
import Login from './src/pages/Login';


const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(false);
  const [user, setUser] = useState();

  // Handle user state changes
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return <Login setUser={setUser} setInitializing={setInitializing} />;
  }

  return (
    <Main user={user} setUser={setUser} setInitializing={setInitializing} />
  );
}

export default App;

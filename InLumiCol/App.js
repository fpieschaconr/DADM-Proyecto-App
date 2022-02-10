import React, {useState, useEffect} from 'react';
import {NativeBaseProvider} from 'native-base';
import auth from '@react-native-firebase/auth';
import Main from './src/Main';
import Login from './src/pages/Login';
import TechMain from './src/pages/TechMain';
import SuperMain from './src/pages/SuperMain';

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
    return (
      <NativeBaseProvider>
        <Login setUser={setUser} setInitializing={setInitializing} />
      </NativeBaseProvider>
    );
  }
  if(user.email==="fpieschaconr@unal.edu.co"){
    return (
      <NativeBaseProvider>
        <SuperMain user={user} setUser={setUser}/>
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider>
      <TechMain user={user} setUser={setUser}/>
    </NativeBaseProvider>
  );
  // return (
  //   <NativeBaseProvider>
  //     <Main user={user} setUser={setUser} setInitializing={setInitializing} />
  //   </NativeBaseProvider>
  // );
};

export default App;

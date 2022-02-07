import React, {useState} from 'react';
import Main from './src/Main';
import Login from './src/pages/Login';


const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  if (initializing) return null;

  if (!user) {
    return (
      <Login setUser={setUser} setInitializing={setInitializing}/>
    );
  }

  return <Main user={user} setUser={setUser} />;
}

export default App;

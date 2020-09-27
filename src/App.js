import React from 'react';
import { Switch } from 'react-router-dom';

import './App.css';
import MainScreen from './screens/MainScreen';

function App() {
  return (
    <Switch>
      <MainScreen />
   </Switch>
  );
}

export default App;

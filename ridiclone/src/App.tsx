import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Template from './components/Template';
import Main from './components/page/Main';

function App() {
  return (
    <div className="App">
      <Route path="/" exact={true} component={Main}/>
    </div>
  );
}

export default App;

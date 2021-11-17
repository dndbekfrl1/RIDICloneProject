import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Template from './components/Template';
import Main from './components/page/Main';
import BookDetail from './components/page/BookDetail';

function App() {
  return (
    <div className="App">
      <Route path="/" exact={true} component={Main}/>
      <Route path="/books/:id" exact={true} component={BookDetail}/>
    </div>
  );
}

export default App;

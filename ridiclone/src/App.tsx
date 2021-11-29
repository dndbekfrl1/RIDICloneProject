import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Template from './components/Template';
import Main from './components/page/Main';
import BookDetailPage from './components/page/BookDetailPage';
import CartPage from './components/page/CartPage';
import AuthorDetail from './components/page/AuthorDetail';
import NotificationPage from './components/page/NotificationPage';
import MyRidiPage from './components/page/MyRidiPage';
import SearchPage from './components/page/SearchPage';
import RomnacePage from './components/page/RomancePage';
import FantasyPage from './components/page/FantasyPage';

function App() {
  return (
    <div className="App">
      <Route path="/" exact={true} component={Main}/>
      <Route path="/books/:id" exact={true} component={BookDetailPage}/>
      <Route path="/cart" exact={true} component={CartPage}/>
      <Route path="/author/:name" exact={true} component={AuthorDetail}/>
      <Route path="/notification" exact={true} component={NotificationPage}/>
      <Route path="/myridi" exact={true} component={MyRidiPage}/>
      <Route path="/search" component={SearchPage}/>
      <Route path="/romance-serial" render={() => <RomnacePage isEbook={false} />}/>
      <Route path="/romance"render={() => <RomnacePage isEbook={true} />}/>
      <Route path="/fantasy-serial" render={() => <FantasyPage isEbook={false} />}/>
      <Route path="/fantasy" render={() => <FantasyPage isEbook={true} />}/>
    </div>
  );
}

export default App;

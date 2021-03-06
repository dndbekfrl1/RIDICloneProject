import React,{useState} from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header";
import Template from './components/Template';
import Main from './components/page/Main';
import BookDetailPage from './components/page/BookDetailPage';
import CartPage from './components/page/CartPage';
import AuthorDetailPage from './components/page/AuthorDetailPage';
import NotificationPage from './components/page/NotificationPage';
import MyRidiPage from './components/page/MyRidiPage';
import SearchPage from './components/page/SearchPage';
import BookCategoryPage from './components/page/BookCategoryPage';
import TranslatorDetailPage from './components/page/TranslatorDetailPage';
import LibraryPage from './components/page/LibraryPage';
import LibraryBookDetailPage from './components/page/LibraryBookDetailPage';



function App() {
    type categoryType = "일반"|"로맨스"|"판타지";
    const [category, setCategory] = useState<categoryType>("일반");
    const onSelect = (category:categoryType)=>(setCategory(category));
  return (
    <div className="App">
      <Header category={category} onSelect={onSelect}/>
      <Route path="/" exact={true} component={Main}/>
      <Route path="/books/:id" exact={true} component={BookDetailPage}/>
      <Route path="/cart" exact={true} component={CartPage}/>
      <Route path="/author/:name" exact={true} component={AuthorDetailPage}/>
      <Route path="/translator/:name" exact={true} component={TranslatorDetailPage}/>
      <Route path="/notification" exact={true} component={NotificationPage}/>
      <Route path="/myridi" exact={true} component={MyRidiPage}/>
      <Route path="/search" component={SearchPage}/>
      <Route path="/romance-serial" render={() => <BookCategoryPage isEbook={false} category={"romance"} />}/>
      <Route path="/romance"render={() => <BookCategoryPage isEbook={true} category={"romance"} />}/> 
      <Route path="/fantasy-serial" render={() => <BookCategoryPage isEbook={false} category={"fantasy"} />}/>
      <Route path="/fantasy" render={() => <BookCategoryPage isEbook={true} category={"fantasy"} />}/>
      <Route path="/library" exact={true} component={LibraryPage}/>
      <Route path="/library/books/:id" exact={true} component={LibraryBookDetailPage}/>

    </div>
  );
}

export default App;

import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import Template from "../Template";
import BOOK_DATA from "../../data/BOOK_DATA.json";
import PersonProfile from "../PersonProfile";
import BookCell from "../BookCell";

interface MatchParams {
    name: string;
  };

const getTranslatorBooks = (name:string)=>{
    return BOOK_DATA.filter((book)=>book.translator.name===name);
}

const TranslatorDetailPage = ({match}:RouteComponentProps<MatchParams>)=>{
    const {name} = match.params;
    const books=getTranslatorBooks(name);
    const {translator} = books[0];

 return(
    <Template>
        <PersonProfile author={translator}/>
        <h3>총 {books.length}권</h3>
        {books.map((book)=>(
            <BookCell type="full" book={book}/>
        ))}
    </Template>
);   
}
export default TranslatorDetailPage;
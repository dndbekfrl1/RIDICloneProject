import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import Template from "../Template";
import BOOK_DATA from "../../data/BOOK_DATA.json";
import PersonProfile from "../PersonProfile";
import BookType from "../../type/book_type";
import BookCell from "../BookCell";

interface MatchParams {
    name: string;
  };

const getAuthorBooks = (name:string)=>{
    return BOOK_DATA.filter((book)=>book.author.name===name);
}

const AuthorDetailPage = ({match}:RouteComponentProps<MatchParams>)=>{
    // console.log("match",match)
    const {name} = match.params;
    const books = getAuthorBooks(name);
    const {author} = books[0];

    console.log(books)


    return(
    <Template>
        <PersonProfile author={author}/>
        <h3>총 {books.length}권</h3>
        {books.map((book)=>(
            <BookCell type="full" book={book}/>
        ))}
    </Template>
    );
}

export default AuthorDetailPage;
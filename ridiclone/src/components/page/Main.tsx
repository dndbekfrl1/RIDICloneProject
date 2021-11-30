import React from "react";
import BookCuration from "../BookCuration";
import Footer from "../Footer";
import Header from "../Header";
import SquareButton from "../SquareButton";
import Template from "../Template";
import { ReactComponent as Heart } from "../../assets/icon/heart.svg";
import EventList from "../EventList";
import BOOK_DATA from "../../data/BOOK_DATA.json";

const getBooks = (type:string)=>{
    return BOOK_DATA.filter((book)=>book.type===type);
}

const Main= ()=>{

    const books = getBooks("novel");
    console.log("books",books);

    return(
    <>
        <Template>
           <EventList/>
           <BookCuration header="Book Curation 1" books={books}/>
        </Template>
        
    </>
    );
}
export default Main
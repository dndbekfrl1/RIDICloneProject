import React from "react";
import BOOK_DATA from "../data/BOOK_DATA.json";
import BookCell from "./BookCell";

const getPublisherBooks = (publisher:string)=>{
    // const publisher:string = "Streich Inc";

    // BOOK_DATA.map((book)=>{console.log(book.publisher)});

    return BOOK_DATA.filter((book)=>book.publisher===publisher);
}

type Parameter={
    publisher:string
};

const SearchPublisher = ({publisher}:Parameter) =>{
    const books = getPublisherBooks(publisher); 
    return(
        <>
            {books.length>0 ? (
                books.map((book)=>(<BookCell type="full" book={book}/>))
            ):(
                <h2>검색 결과가 없습니다.</h2>
            )}
        </>
    );
}

export default SearchPublisher;
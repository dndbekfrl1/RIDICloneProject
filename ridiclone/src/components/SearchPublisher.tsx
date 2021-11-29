import React from "react";
import BOOK_DATA from "../data/BOOK_DATA.json";
import BookCell from "./BookCell";
import styled from "styled-components";

const SearchResultBlock = styled.div`
    width: 100%;
`
const getPublisherBooks = (publisher:string)=>{
    return BOOK_DATA.filter((book)=>book.publisher===publisher);
}

type Parameter={
    publisher:string
};

const SearchPublisher = ({publisher}:Parameter) =>{
    const books = getPublisherBooks(publisher); 
    console.log(books,publisher);
    return(
        <SearchResultBlock>
            <h3 className="title">'출판사 {publisher}'도서 검색 결과</h3>
            {books.length>0 ? (
                books.map((book)=>(<BookCell type="full" book={book}/>))
            ):(
                <h2>검색 결과가 없습니다.</h2>
            )}
        </SearchResultBlock>
    );
}

export default SearchPublisher;
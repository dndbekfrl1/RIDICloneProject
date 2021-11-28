import React from "react"
import styled from "styled-components"
import BookType from "../type/book_type"
import Book from "./Book";

const BookCellBlock = styled.div`
    width: 600px;

`

type BookInfo ={
    id:number,
    thumnail?:string,
    type?:string,
    category?:string[],
    title:string,
    author:any,
    starRate?:any,
    canRent?:boolean,
    buySalePercent?:number
}

type BookCellProps = {
    book:BookInfo,
};

const BookCell = ({book}:BookCellProps)=>{

    return(<BookCellBlock>

        <Book id={book.id} thumnail={book.thumnail} canRent={book.canRent} type={book.type} category={book.category}title={book.title} author={book.author} starRate={book.starRate} buySalePercent={book.buySalePercent}  />
    </BookCellBlock>)
}
export default BookCell;
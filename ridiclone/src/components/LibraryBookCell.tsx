import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";
import RentType from "../type/rent_type";
import Book from "./Book";

const LibraryBookCellBlock = styled.div`
    min-width: 40px;
    display: flex;
    align-items: center;
    .book_info{
        margin-left: ${theme.spacing.m}rem;
        display: flex;
        flex-direction: column;
    }
`

type LibraryBookCellProps = {
    book:RentType
}

const isRentValid = (rentEnd:string)=>{
    const end = new Date(rentEnd);
    const today = new Date();

    if(end.valueOf()-today.valueOf()<=0)return true;
    else return false;
}

const LibraryBookCell = ({book}:LibraryBookCellProps) =>{
    const isExpired:boolean = isRentValid(book.rentEnd);

    return(
        <LibraryBookCellBlock>
            <Book id={book.id} isExpired={isExpired} thumbnail={book.thumbnail} xRated={book.xRated}/>
            <div className="book_info">
                <h3>{book.title}</h3>
                <p>{book.author.name}</p>
                {isExpired ? (<p>대여 만료</p>):(<p>대여</p>)}
            </div>

        </LibraryBookCellBlock>
    );
}
export default LibraryBookCell;
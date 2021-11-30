import React from "react";
import styled from "styled-components";
import LibraryBook from "./LibraryBook";
import RentType from "../type/rent_type";
import { theme } from "../theme/theme";

const LibraryBookListBlock = styled.div`
    width: 100%;
    min-width: 850px;
    padding: 0  ${theme.spacing.l}rem ;
    .book-wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        background: url("https://library.ridibooks.com/static/portrait_book_w110.sSbUp1gTih7A.png") center top / 100% 180px repeat-y;;
    }
`

type LibraryBookListProps = {
    books:RentType[]
}

const LibraryBookList = ({books}:LibraryBookListProps)=>{
    return(
        <LibraryBookListBlock>
            <div className="book-wrapper">
                {books.map((book)=>(<LibraryBook book={book}/>))}
            </div>
        </LibraryBookListBlock>
    )
}

export default LibraryBookList;
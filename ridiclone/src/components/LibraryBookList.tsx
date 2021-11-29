import React from "react";
import styled from "styled-components";
import LibraryBook from "./LibraryBook";
import RentType from "../type/rent_type";

const LibraryBookListBlock = styled.div`
`

type LibraryBookListProps = {
    books:RentType[]
}

const LibraryBookList = ({books}:LibraryBookListProps)=>{
    return(
        <LibraryBookListBlock>
            {books.map((book)=>(<LibraryBook book={book}/>))}
        </LibraryBookListBlock>
    )
}

export default LibraryBookList;
 import React from "react";
import RentType from "../type/rent_type";
 import styled from "styled-components";
import { theme } from "../theme/theme";
import { Link } from "react-router-dom";
import Book from "./Book";


const LibraryBookBlock = styled.div`
    margin-bottom: ${theme.spacing.m}rem ;
    .thumnail{
        padding: 0 ${theme.spacing.m}rem;
        img{
            width: 120px;
        }
    }
` 
type LibraryBookProps = {
    book:RentType;
}

 const LibraryBook = ({book}:LibraryBookProps)=>{
     return(

         <Link to={{
             pathname:`library/books/${book.id}`, 
             state:{book}}}>
            <LibraryBookBlock>
                <div className="thumnail">
                    <img src={book.thumbnail}/>
                </div>
            </LibraryBookBlock>
         </Link>
     )
 }

 export default LibraryBook;
 import React from "react";
import RentType from "../type/rent_type";
 import styled from "styled-components";


const LibraryBookBlock = styled.div`
    .thumnail{
        img{
            width: 4rem;
        }
    }
` 
type LibraryBookProps = {
    book:RentType;
}

 const LibraryBook = ({book}:LibraryBookProps)=>{
     return(
         <LibraryBookBlock>
             <div className="thumnail">
                 <img src={book.thumbnail}/>
             </div>
         </LibraryBookBlock>
     )
 }

 export default LibraryBook;
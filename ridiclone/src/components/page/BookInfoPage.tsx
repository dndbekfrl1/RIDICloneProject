import React from "react";
import Template from "../Template";
import styled from "styled-components";
import BookInfo from "../BookInfo";
import BookType from "../../type/booktype";
import SeriesList from "../SeriesList";
import { theme } from "../../theme/theme";

const BookInfoPageBlok = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    .bookinfo-wrapper{
        width: 90%;
    }
    .aside-wrapper{
        width: 30%;
        border-left: 1px solid ${theme.colors.white_gray};
        .eventinfo{
            width: 100%;
            height: 150px;
            background: ${theme.colors.gray};
        }
    }
`

type BookInfoProps = BookType;

const BookInfoPage = (book:BookInfoProps)=>{
    return(
        <>
        <Template>
            <BookInfoPageBlok>
                <div className="bookinfo-wrapper" >
                    <BookInfo book={book}/>
                    <SeriesList title={book.title} count={book.count} freeCount={book.freeCount} />
                </div>
                <div className="aside-wrapper">
                   <aside>
                       <div className="eventinfo" ></div>
                   </aside>
                </div>
                
            </BookInfoPageBlok>
        </Template>
        </>
    );
}

export default BookInfoPage;
import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import BOOK_DATA from "../../data/BOOK_DATA.json"
import Template from "../Template";
import styled from "styled-components";
import BookInfo from "../BookInfo";
import BookType from "../../type/booktype";
import SeriesList from "../SeriesList";
import { theme } from "../../theme/theme";
import BookInfoDetail from "../BookInfoDetail";

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

interface MatchParams {
    postId: string;
  };

const BookDetailPage = ({match}:RouteComponentProps<MatchParams>)=>{
  console.log("match",match)
    let {id}:any = match.params;
  id = Number(id);
  const book:any = BOOK_DATA.find((d)=>id===d.id);
  return(
    <>
    <Template>
        <BookInfoPageBlok>
            <div className="bookinfo-wrapper" >
                <BookInfo book={book}/>
                <SeriesList title={book.title} count={book.count} freeCount={book.freeCount} />
                <BookInfoDetail label="작품 소개" description={book.description}/>
                <BookInfoDetail label="목차" description={book.index}/>
                <BookInfoDetail label="저자 소개" description={book.author.introduction}/>
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
};

export default BookDetailPage;
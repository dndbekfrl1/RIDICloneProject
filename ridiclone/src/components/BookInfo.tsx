import React from "react";
import styled from "styled-components"
import { Link,Route } from "react-router-dom";
import {ReactComponent as Stars} from "../assets/icon/stars.svg"
import { theme } from "../theme/theme";
import Button from "../components/Button"
import BookType from "../type/book_type";
import Main from "./page/Main";
import Book from "./Book";


const BookInfoBlock = styled.div`
    width: 100%;
    display:flex;
    color:${theme.fontColor.gray};
    font-size:${theme.fontSize.s}px;
    .thumnail-wrapper{
        display:flex;
        flex-direction: column;
        align-items: center;
        margin-right: ${theme.spacing.l}rem;
        .thumnail{
            img{
                width: auto;
                max-height: 10rem;
            }
            margin-bottom: ${theme.spacing.s}rem;
        }
    }
    .bookinfo-wrapper{
        .title{
            margin: ${theme.spacing.s}rem 0 ;
            color:${theme.fontColor.black};
            font-size: ${theme.fontSize.l}px;
        }
        .starRating{
            display:flex;
            margin: ${theme.spacing.s}rem 0 ;
            .starRating_Icon{
                position: relative;
                .starRatin_fill{
                    position: absolute;
                    left:0;
                    top:0;
                }
            }
            .rate{
                color:${theme.colors.star}
            }
            .rateNum{
                color:${theme.fontColor.gray}
            }
        }
        .metadata-wrapper{
            div{
                margin:${theme.spacing.xs}rem 0;
            }
        }
    }
`

type BookInfoProps = {
    book:BookType
}


const BookInfo = ({book}:BookInfoProps)=>{ 
    const starRatingFill = book.starRate.rate*10;
    return(
    <BookInfoBlock>
        <div className="thumnail-wrapper">
            <div className="thumnail">
                <img src={book.thumbnail}/>
            </div>
        </div>
        <div className="bookinfo-wrapper">
            <div className="">{book.type}</div>
            <h3 className="title">{book.title}</h3>
            <div className="starRating">
                <span className="starRating_Icon">
                    <Stars className="starRatin_fill" height="10px" fill={theme.colors.star} viewBox={"0 0 "+ starRatingFill +" 10"} />
                    <Stars fill={theme.colors.gray} height="10px" viewBox="0 0 50 10" />
                </span>
                <div className="rate">{book.starRate.rate}점</div>
                <div className="rateNum">({book.starRate.rateNum}명)</div>
            </div>
            <div className="metadata-wrapper">
                <div className="author">
                    <Link to={`/author/${book.author.name}`}><b>{book.author.name}</b></Link> 저
                </div>
                {book.translator &&(
                    <div className="translator">
                    <Link to={`/translator/${book.translator.name}`} > <b>{book.translator.name}</b></Link>역
                    </div>
                )}
                <div className="publisher">
                    <Link to={`/search/publisher?q=${book.publisher}`}><b>{book.publisher}</b></Link> 출판
                </div>
            </div>
        </div>
    </BookInfoBlock>
)}
export default BookInfo;
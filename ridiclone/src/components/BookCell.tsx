import React from "react"
import styled from "styled-components"
import BookType from "../type/book_type"
import Book from "./Book";
import {ReactComponent as Star} from "../assets/icon/star.svg";
import { theme } from "../theme/theme";

const BookCellBlock = styled.div`
    width: 600px;
    p{
        margin: 0;
        padding: 0;
    }
    &.full{
        width: 100%;
        font-size: ${theme.fontSize.s}px;
        color: ${theme.fontColor.light_gray};
        display: flex;
        border-bottom: 1px solid ${theme.colors.gray};
        padding: 0 0 ${theme.spacing.m}rem 0;
        div{
            margin: 0  ${theme.spacing.s}rem 0 0;
            p{
                margin: 0  0 ${theme.spacing.xs}rem 0 ;
            }
            .title{
                color:${theme.fontColor.black};
                margin:0 0 ${theme.spacing.xs}rem 0 }
            .starRate_wrapper{
                display: flex;
                align-items: center;
                .starRate{color:${theme.colors.star};}
            }
            .price{
                color: ${theme.colors.primary};
            }
            .salePercent{
                color:${theme.colors.red}
            }
            span{
                margin: 0 ${theme.spacing.xs}rem 0 0;
            }
        }
    }
`

type BookCellProps = {
    type:"normal"|"full"
    book:BookType,
};

const BookCell = ({type,book}:BookCellProps)=>{

    let bookCell;

    switch(type){
        case "normal":
            bookCell=<BookCellBlock>
                <Book xRated={book.xRated} id={book.id} title={book.title} author={book.author.name}  thumbnail={book.thumbnail} />
            </BookCellBlock>
            break;
        case "full":
            bookCell=<BookCellBlock className={type}>
                <Book  xRated={book.xRated} id={book.id} thumbnail={book.thumbnail} />
                <div>
                    <h3 className="title">{book.title}</h3>
                    <p className="author">{book.author.name}</p>
                    {book.translator.name && <p className="translator">{book.translator.name}</p>
                    }
                    <p className="starRate_wrapper">
                        <Star width="12" fill={theme.colors.star}/>
                        <span className="starRate">
                            <b>{book.starRate.rate}점</b>
                        </span>
                        <span>({book.starRate.rateBuyerNum})</span>
                    </p>
                    <p>
                        <b>{book.publisher}</b> | {book.type}
                    </p>
                    <div>
                        {book.canRent &&(
                            <p>대여<b> <span className="price">{book.buyPrice}</span></b></p>
                        )}
                        <p>구매 <b><span className="price">{book.buyPrice}원</span></b>
                            {book.buySalePercent && (
                                <span className="salePercent"><b>({book.buySalePercent}%↓)</b></span>
                            )}
                        </p>
                    </div>
                </div>
            </BookCellBlock>
            break;
        default:
            break;
    }

    return(
    <>
        {bookCell}
    </>)
}

BookCell.defaultProps = {
    type:"normal"
}

export default BookCell;
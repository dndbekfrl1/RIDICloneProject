import React from "react";
import styled from "styled-components"
import Book from "./Book";
import BookType from "../type/book_type";
import { theme } from "../theme/theme";

const CurationBlock = styled.div`
    /* width:44rem; */
    width:100%;
    .header{
        font-size:${theme.fontSize.m}px;
        margin:${theme.spacing.m}rem 0;
    }
    .books_wrapper{
        position:relative;
        button{
            position:absolute;
            top:25%;
            z-index:999;
            width: 2.5rem;
            height:2.5rem;
            background: ${theme.colors.white};
            border:1px solid ${theme.colors.dark_gray};
            border-radius: 50%;

        }
        button.left{
            left:-16px;
        }
        button.right{
            right:-16px;
        }
        .books{
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            div{
                margin: 0 ${theme.spacing.xs}rem;
            }
        }
    }
`
type BookCurationProps={
    header:string,
    books:BookType[],
}

const MaxBookNum = 5;

const BookCuration=({header,books}:BookCurationProps)=>{

    return(
        <CurationBlock>
            <h2 className="header">{header}</h2>
            <div className="books_wrapper">
                <button className="left">왼</button>
                <div className="books">
                    {books&&(
                        books.map((b,i)=>{
                            if(i<=MaxBookNum){
                                return (<Book id={b.id} title={b.title} thumbnail={b.thumbnail} canRent={b.canRent}/>)
                            }
                        }
                    )
                    )}
                    
                </div>
                <button className="right">오</button>
            </div>
        </CurationBlock>
    )
}

export default BookCuration
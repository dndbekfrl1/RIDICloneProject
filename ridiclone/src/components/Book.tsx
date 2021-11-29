import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme/theme";

const BookBlock = styled.div`
    width: fit-content;
    position: relative;
    .rent{
        position:absolute;
        top:-8px;
        left:-8px;
        width:2rem;
        height:2rem;
        background: ${theme.colors.dark_green};
        color:${theme.colors.white};
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${theme.fontSize.s}px;
    }
    .thumbnail{
        img{
            width: auto;
            max-height: 8rem;
        }
    }
    .book_info{
        .title{
            font-size:${theme.fontSize.s}px;
        }
        .author{
            font-size:${theme.fontSize.s}px;
        }
    }
    h3,p{
        margin: 0;
        padding: 0;
    }

`
type BookProps ={
    id:number,
    thumbnail?:string,
    type?:string,
    category?:string[],
    title?:string,
    author?:any,
    starRate?:any,
    canRent?:boolean,
    buySalePercent?:number
}

const Book = ({id,thumbnail,canRent,type,category,title,author,starRate,buySalePercent}:BookProps)=>(
    <Link to={`/books/${id}`}>
        <BookBlock>
            {canRent && <div className="rent">대여</div>}
            <div className="thumbnail">
                <img src={thumbnail}/>
            </div>
            {title &&(
                <div className="book_info">
                    <h3 className="title">
                        {title}
                    </h3>
                    <p className="author">
                        {author}
                    </p>
                </div>
            )}
        </BookBlock>
    </Link>

)

Book.defaultProps={
    canRent:false,
}

export default Book;
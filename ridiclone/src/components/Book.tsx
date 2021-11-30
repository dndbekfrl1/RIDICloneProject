import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme/theme";
import {ReactComponent as Clock} from "../assets/icon/clock.svg"
import {ReactComponent as Stars} from "../assets/icon/stars.svg"

const BookBlock = styled.div<{size?:string}>`
    width: fit-content;
    position: relative;
    .waitFree{
        position:absolute;
        top:-8px;
        left:-8px;
        width:2rem;
        height:2rem;
        background: ${theme.colors.primary};
        color:${theme.colors.white};
        border-radius: 100%;
        display: flex;
        z-index:999;
        align-items: center;
        justify-content: center;
        font-size: ${theme.fontSize.s}px;
    }
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
        z-index:999;
        align-items: center;
        justify-content: center;
        font-size: ${theme.fontSize.s}px;
    }
    .xRated{
        position:absolute;
        z-index:999;
        top:4px;
        right:4px;
        width:1rem;
        height:1rem;
        background: ${theme.colors.white};
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${theme.fontSize.s}px;
        border: 2px solid ${theme.colors.red};
    }
    
    .thumbnail{
        position: relative;
        width: fit-content;
        height: fit-content;
        img{
            width: auto;
            max-height:  ${props => props.size==="small" ? "6rem" : "8rem"};
        }
        .expired{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0px;
            top: 0px;
            z-index:1000;
            background-color: black;
            opacity: 0.4;
        }
    }
    
    .book_info{
        .title{
            font-size:${theme.fontSize.s}px;
        }
        .author{
            font-size:${theme.fontSize.s}px;
        }

        .starRating{
            display:flex;
            margin: ${theme.spacing.s}rem 0 ;
            .starRating_Icon{
                position: relative;
                .starRatin_fill{
                    position: absolute;
                    left:0px;
                    top:0px;
                }
            }
            .rateNum{
                font-size:${theme.fontSize.xs}px;
                color:${theme.fontColor.gray};
            }
        }
    }
    h3,p{
        margin: 0;
        padding: 0;
    }

`
type BookProps ={
    size?:"small"|"normal"|"big",
    id:number,
    thumbnail?:string,
    type?:string,
    category?:string[],
    title?:string,
    author?:any,
    starRate?:{    
        rate:number,
        rateNum:number,
        rateBuyerNum:number
    },
    canRent?:boolean,
    xRated?:boolean,
    buySalePercent?:number
    isExpired?:boolean,
    waitFree?:boolean
}

const Book = ({id,waitFree,size,thumbnail,xRated,canRent,isExpired,title,author,starRate,buySalePercent}:BookProps)=>{
    let starRatingFill;
    if(starRate){
        starRatingFill= starRate?.rate*10;
    }
    
    return (
    <Link to={`/books/${id}`}>
        <BookBlock size={size} >
            {xRated && <div className="xRated"><b>19</b></div>}
            {canRent && <div className="rent">대여</div>}
            {waitFree && <div className="waitFree"><Clock fill={theme.colors.white} width="14"/></div>}
            <div className="thumnail_wrapper">
                <div className="thumbnail">
                    {isExpired&& <div className="expired"></div>}
                    <img src={thumbnail}/>
                </div>
            </div>
            {title &&(
                <div className="book_info">
                    <h3 className="title">
                        {title}
                    </h3>
                    <p className="author">
                        {author}
                    </p>
                    {starRate &&(
                    <div className="starRating">
                         <span className="starRating_Icon">
                             <Stars className="starRatin_fill" height="10px" fill={theme.colors.star} viewBox={"0 0 "+ starRatingFill +" 10"} />
                             <Stars fill={theme.colors.gray} height="10px" viewBox="0 0 50 10" />
                         </span>
                         <div className="rateNum">{starRate.rateNum}</div>
                     </div>
                    )}
                </div>
            )}
        </BookBlock>
    </Link>
    )
}
Book.defaultProps={
    size:"normal",
    canRent:false,
    xRated:false,
    isExpired:false,
    waitFree:false
}

export default Book;
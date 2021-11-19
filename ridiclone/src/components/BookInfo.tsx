import React from "react";
import styled from "styled-components"
import {ReactComponent as Stars} from "../assets/icon/stars.svg"
import { theme } from "../theme/theme";
import Button from "../components/Button"
import BookType from "../type/booktype";


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
            <Button label="미리보기" btn_color="blue" size="medium"/>
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
                    <b>{book.author.name}</b> 저
                </div>
                <div className="translator">
                    <b>{book.translator.name}</b>
                </div>
                <div className="publisher">
                    <b>{book.publisher}</b> 출판
                </div>
            </div>
        </div>
    </BookInfoBlock>
)}
export default BookInfo;
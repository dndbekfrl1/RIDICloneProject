import React from "react";
import styled from "styled-components"
import Stars from "../assets/img/stars.svg"

interface Representative{
    name:string,
    thumnail:string,
}

interface Author{
    name:string,
    awards?:string[],
    representatives?:Representative[],
    introduction?:string,
}

interface Translator{
    name:string,
    nationality:string,
    career?:string,
    representatives?:Representative[],
    introduction?:string
}

interface StarRate{
    rate:number,
    rateNum:number,
    rateBuyerNum:number,
}

interface Book{
    id:number,
    thumnail:string,
    type?:string,
    category?:string[],
    title:string,
    author:Author,
    translator:Translator,
    publisher:string,
    rating?:StarRate,
    starRate?:any,
    rentalPrice?:number,
    rentalSalePercent?:number,
    buyPrice:number,
    buySalePercent?:number,
    count:number,
    freeCount?:number,
    isFinished?:boolean,
    canRent?:boolean,
    waitFree?:boolean,
    xRated?:boolean,
    description:string,
    index:string,
    lastlyRead:string,
}

const BookInfoBlock = styled.div`
    width:400px;
    border:2px solid tomato;
    display:flex;

    .thumnail{
        img{
            width: auto;
            max-height: 8rem;
        }
    }
    .bookinfo-wrapper{
        .starRating{
            display:flex;
            .starRating_Icon{
                background: src(${Stars});
            }
        }
    }

`


const BookInfo = (book:Book)=>(
    <BookInfoBlock>
        <div className="thumnail-wrapper">
            <div className="thumnail">
                <img src={book.thumbnail}/>
            </div>
            <button>좋아요</button>
        </div>
        <div className="bookinfo-wrapper">
            <div className=""></div>
            <div className="title">{book.title}</div>
            <div className="starRating">
                <span className="starRating_Icon">
                    <img src={Stars}/>
                </span>
                <div>{book.starRate.rate}점</div>
                <div>({book.starRate.rateNum})</div>
            </div>
            <div>
                <div className="translator">
            </div>
            </div>
        </div>
    </BookInfoBlock>
)
export default BookInfo;
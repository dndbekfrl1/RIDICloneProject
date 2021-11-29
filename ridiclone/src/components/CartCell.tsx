import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { theme } from "../theme/theme";

const CartCellBlock = styled.div`
    box-sizing: border-box;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: ${theme.spacing.m}rem ${theme.spacing.xl}rem ;
    border-bottom: 1px solid ${theme.colors.gray};


.top_wrapper{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

}
    .book_wrapper{
        display: flex;
        align-items: center;

    }

    .thumnail{
        margin: 0 ${theme.spacing.s}rem;
        img{
            width: auto;
            max-height: 5rem;
        }
    }

    .book-info-wrapper{
        h3{
            margin: 0;
            padding: 0;
        }
        .book_title{
            font-size: ${theme.fontSize.m}px;
        }
        .book_author_name{
            margin: ${theme.spacing.s}rem 0;
            font-size: ${theme.fontSize.s}px;
        }
        .button_wrapper{
            display: flex;
            
            div{
                margin: ${theme.spacing.s}rem 0;
            }
        }
       
    }
    .price-info{
        display: flex;
        font-size: ${theme.fontSize.s}px;
        align-items: flex-end;
        margin-bottom: ${theme.spacing.xl}rem;
        div{
            margin:0 ${theme.spacing.s}rem ;
        }
        .buy_price{
            font-weight: bold;
            color: ${theme.colors.primary};
        }
        .buy_sale_percent{
            color: ${theme.colors.danger};
        }
        .non_sale{
            color: ${theme.fontColor.gray};
        }

        .price{
            color: ${theme.fontColor.gray};
        }
    }
`

type BookInfo = {
    id:number,
    title:string,
    author:{
        name:string,
    },
    thumbnail:string,
    buyPrice:number,
    buySalePercent?:number
}

type CartCellProps = {
    bookInfo:BookInfo
}

const CartCell = ({bookInfo}:CartCellProps)=>{
  

    return(<CartCellBlock>
        <div className="top_wrapper">
            <div className="book_wrapper">
                <div>
                    <input type="checkbox" checked={true}/>
                </div>
                
                <div className="thumnail">
                    <img src={bookInfo.thumbnail}/>
                </div>
                <div className="book-info-wrapper">
                        <h3 className="book_title">{bookInfo.title}</h3>
                        <div className="book_author_name">{bookInfo.author.name}</div>
                        <div className="button_wrapper">
                            <Button label="위시리스트로 이동" btn_color="white" size="small"/>
                            <Button label="삭제" btn_color="white" size="small"/>
                        </div>
        
                </div>
            </div>
            <div className="price-info">
                {bookInfo.buySalePercent ? 
                <div className="buy_sale_percent">
                {bookInfo.buySalePercent}%</div>:<div className="non_sale">-</div>}
                <div>
                    {bookInfo.buySalePercent ? <div className="price"><del>{bookInfo.buyPrice}</del></div> : ""}
                    <div className="buy_price">{bookInfo.buyPrice}원</div>
                </div>
            </div>
        </div>
    </CartCellBlock>)
}

export default CartCell;
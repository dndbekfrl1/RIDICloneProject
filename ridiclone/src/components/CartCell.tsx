import React from "react";
import styled from "styled-components";
import Button from "./Button";

const CartCellBlock = styled.div`
    width: 600px;
    display: flex;
    flex-direction: row;
    .thumnail{
        img{
            width: auto;
            max-height: 8rem;
        }
    }

    .button_wrapper{
        display: flex;
    }
`

type CartCellProps = {
    id:number,
    title:string,
    author_name:string,
    thumbnail:string,
    buyPrice:number,
    buySalePercent?:number
}

const CartCell = (bookInfo:CartCellProps)=>{
    return(<CartCellBlock>
        <div className="thumnail">
            <img src={bookInfo.thumbnail}/>
        </div>
        <div>
            <div>
                <h3>{bookInfo.title}</h3>
                <div>{bookInfo.author_name}</div>
                <div className="button_wrapper">
                    <Button label="위시리스트로 이동" btn_color="white" size="small"/>
                    <Button label="삭제" btn_color="white" size="small"/>
                </div>
            </div>
        </div>
    </CartCellBlock>)
}

export default CartCell;
import React from "react";
import styled from "styled-components"
import CartCell from "./CartCell";
import Button from "./Button";
import { theme } from "../theme/theme";

const CartListBlock = styled.div`
    .select_option{
        box-sizing: border-box;
        border-bottom: 1px solid ${theme.colors.gray};
        display: flex;
        align-items: center;
        font-size: ${theme.fontSize.s}px;
        justify-content: space-between;
        padding: ${theme.spacing.m}rem ${theme.spacing.xl}rem ;
        .btn_wrapper{
            display: flex;
        }
    }
`

type BookInfo = {
    id:number,
    title:string,
    author:{
        name:string,
    }
    thumbnail:string,
    buyPrice:number,
    buySalePercent?:number
}

type CartListProps = {
    books?:BookInfo[],
}



const CartList = ({books}:CartListProps)=>{
    return(
        <CartListBlock>

        <div className="select_option">
                <div className="select_wrapper">
                    <input type="checkbox" /><span>전체 선택</span>
                </div>
                <div className="btn_wrapper">
                    <Button label={"선택 위시리스트로 이동"} btn_color={"white"} size={"small"}/>
                    <Button label={"선택 삭제"} btn_color={"white"} size={"small"}/>
                </div>
        </div>
            {books ?(
                books.map((book)=><CartCell key={book.id} bookInfo={book}/>)
            ):(<div>구매 가능한 책이 없습니다.</div>)}

        <div className="select_option">
                <div className="select_wrapper">
                    <input type="checkbox" /><span>전체 선택</span>
                </div>
                <div className="btn_wrapper">
                    <Button label={"선택 위시리스트로 이동"} btn_color={"white"} size={"small"}/>
                    <Button label={"선택 삭제"} btn_color={"white"} size={"small"}/>
                </div>
        </div>
        </CartListBlock>
    )
}

export default CartList;
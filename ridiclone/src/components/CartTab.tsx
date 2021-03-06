import React,{useState} from "react";
import styled from "styled-components"
import { theme } from "../theme/theme";
import BookType from "../type/book_type";
import CartList from "./CartList";
import CART_DATA from "../data/CART_DATA.json";
import CartType from "../type/cart_type";

const CartTabBlock = styled.div`
    /* width: 600px; */
    width: 100%;
    border: 1px solid ${theme.colors.border};
    ul,li{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    ul{
        display: flex;
    }
    li{
        flex: 1;
        font-size: ${theme.fontSize.s}px;
        text-align: center;
        padding: ${theme.spacing.s}rem 0;
        cursor: pointer;
        background: ${theme.colors.gray};
    }
    li.active{
       
        background: ${theme.colors.white};
    }
    li:hover{
        color: ${theme.colors.primary};
    }

    .books_wrapper{
        min-height: 400px;
    }
`
type CartTabProps = {
    menuIndex:number,
    onSelect:(index:number)=>void
}

const CartTab = ({menuIndex,onSelect}:CartTabProps)=>{

    const cartList:CartType[] = CART_DATA;
    const canRentBooks = cartList.filter((book)=>book.canRent==true);
  
    const menuList:any = {
        0:<CartList books={cartList}/>,
        1:<CartList books={canRentBooks}/>
    }

    return(
    <CartTabBlock>
        <ul className="">
            <li className={`${menuIndex===0? 'active' : ''}`} onClick={()=>onSelect(0)}>구매 가능
            </li>
            <li className={`${menuIndex===1? 'active' : ''}`} onClick={()=>onSelect(1)}>대여 가능</li>
        </ul>
        
        <div className="books_wrapper">
           
            {menuList[menuIndex]}</div>
    </CartTabBlock>);
}
export default CartTab;
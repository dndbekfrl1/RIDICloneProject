import React,{useState} from "react";
import styled from "styled-components"
import { theme } from "../theme/theme";


const CartTabBlock = styled.div`
    width: 600px;
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
`

const CartTab = ()=>{
    const[menuIndex,setMenuIndex] =useState<number>(0);
    const changeMenu = (menuIndex:number)=>{
        setMenuIndex(menuIndex);
    }
    const menuList:any = {
        0:"응",
        1:"아니야"
    }

    return(
    <CartTabBlock>
        <ul className="">
            <li className={`${menuIndex===0? 'active' : ''}`} onClick={()=>changeMenu(0)}>구매 가능
            </li>
            <li className={`${menuIndex===1? 'active' : ''}`} onClick={()=>changeMenu(1)}>대여 가능</li>
        </ul>
        <div>{menuList[menuIndex]}</div>
    </CartTabBlock>);
}
export default CartTab;
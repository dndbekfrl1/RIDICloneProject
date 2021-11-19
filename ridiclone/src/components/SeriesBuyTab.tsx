import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../theme/theme";
import SeriesList from "./SeriesList";

const SeriesBuyTabBlock = styled.div`
    width: 600px;
    border-top: 2px solid ${theme.colors.dark_gray};
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

type SeriesBuyTabProps={
    canRent:boolean,
    title:string,
    count:number,
    freeCount:number
}



const SeriesBuyTab = ({canRent,title,count,freeCount}:SeriesBuyTabProps)=>{
    const[menuIndex,setMenuIndex] =useState<number>(1);
    const changeMenu = (menuIndex:number)=>{
        setMenuIndex(menuIndex);
    }
    const menuList:any = {
        0:<SeriesList title={title} count={count} freeCount={freeCount}/>,
        1:<SeriesList title={title} count={count} freeCount={freeCount}/>
    }

    return (
        <SeriesBuyTabBlock>
            {canRent==true?(
                <>
                    <ul className="">
                        <li className={`${menuIndex===0? 'active' : ''}`} onClick={()=>changeMenu(0)}>대여하기
                        
                        </li>
                        
                        <li className={`${menuIndex===1? 'active' : ''}`} onClick={()=>changeMenu(1)}>구매하기</li>
                    </ul>
                    <div>{menuList[menuIndex]}</div>
                </>
                
            ):(
                <SeriesList title={title} count={count} freeCount={freeCount}/>
            )}

        </SeriesBuyTabBlock>
    );
}

export default SeriesBuyTab;
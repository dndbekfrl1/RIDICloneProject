import React,{useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme/theme";

const CategoriesBlock = styled.div`
    color: ${theme.fontColor.black};
    width: 100%;
    padding:${theme.spacing.m}rem ${theme.spacing.xxl}rem ;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.gray};
    ul{
        width: 30%;
        min-width: 350px;
        display: flex;
        justify-content: space-between;
        cursor:pointer;
        li.active{
            color:${theme.colors.primary}
        }
    }
`

type categoryType = "일반"|"로맨스"|"판타지"| "만화"|"BL";


type CategoriesProps={
    onSelect:(category:categoryType)=>void,
    category:categoryType
}

const Categories = ({onSelect, category}:CategoriesProps)=>{

    const categoryList:{name:categoryType,path:string}[]=[
        {name:"일반",path:"/"},
        {name:"로맨스",path:"/romance-serial"},
        {name:"판타지",path:"/fantasy-serial"},
        {name:"만화",path:"/"},
        {name:"BL",path:"/"},
    ]
    return(
        <CategoriesBlock>
            <ul>
                {categoryList.map((c:{name:categoryType,path:string})=>(
                       <li 
                        onClick={()=>onSelect(c.name)}
                        className={`${category===c.name? 'active' : ''}`}
                        
                        >
                    <Link to={c.path}>
                     {c.name}
                    </Link>
                    </li>
                ))}
            </ul>
        </CategoriesBlock>
    );
}
export default Categories;
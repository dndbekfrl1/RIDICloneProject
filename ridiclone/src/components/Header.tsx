import React ,{useState}from "react";
import styled from 'styled-components';
import { theme } from "../theme/theme";
import Button from "./Button";
import Logo from "./Logo";
import {ReactComponent as Home} from "../assets/icon/home.svg";
import {ReactComponent as Alert} from "../assets/icon/alarm.svg";
import {ReactComponent as Cart} from "../assets/icon/cart.svg";
import {ReactComponent as MyRidi} from "../assets/icon/person.svg";
import { Link } from "react-router-dom";
import Categories from "./Categories";

const HeaderBlock =styled.header`
    width: 100%;
    height: fit-content;
    .wrapper{
        padding:${theme.spacing.m}rem ${theme.spacing.xxl}rem ;
        background:${theme.colors.primary};
    }

    .util_wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: ${theme.spacing.m}rem;
       
        div{
            margin-right: ${theme.spacing.m}rem;
        }
        .util{
            display: flex;
            align-items: center;
        }
    }
    .my-menu{
        display: flex;
        align-items: center;
        a{
            display: flex;
            align-items: center;
        }
    }
    .my-util_wrapper{
        display: flex;
        min-width: 300px;
        width: 40%;
        align-items: center;
        justify-content: space-between;
        color: ${theme.colors.white};
        
        font-weight: bold;
    }
    .menu_wrapper{
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
        }
    }
`

const InputBlock = styled.input`
    width: 12rem;
    padding: .5rem 1rem;
`
type categoryType = "일반"|"로맨스"|"판타지"| "만화"|"BL";

type CategoriesProps={
    onSelect:(category:categoryType)=>void,
    category:categoryType
}


const Header = ({onSelect,category}:CategoriesProps)=>{
  
return (
    <HeaderBlock>
        <div className="wrapper">
        <div className="util_wrapper">
            <div className="util">
                <div>
                    <Logo/> 
                </div>
                <InputBlock type="text" placeholder="제목, 저자, 출판사 검색" />
                </div>
                <div className="util">
                <Button label="캐시충전" size="medium" btn_color="blue" ></Button>
                <Button label="내 서재" size="medium" btn_color="blue"></Button>
            </div>
        </div>
        <ul className="my-util_wrapper">
            <li className="my-menu"><Link to="/"><Home width={16} fill={theme.colors.white}/><span>홈</span> </Link></li>
            <li className="my-menu">
                <Link to="/notification">
                <Alert width={16} fill={theme.colors.white}/><span>알림</span>
                </Link>
            </li>
            <li className="my-menu"><Link to="/cart"><Cart width={16} fill={theme.colors.white}/><span>카트</span></Link></li>
            <li className="my-menu"><Link to="/myridi"><MyRidi width={16} fill={theme.colors.white}/><span>마이리디</span></Link></li>
        </ul>
        </div>
        <Categories category={category} onSelect={onSelect}/>
        
    </HeaderBlock>
    );}

export default Header;
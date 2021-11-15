import React from "react";
import styled from 'styled-components';
import { theme } from "../theme/theme";
import Button from "./Button";
import Logo from "./Logo";

const HeaderBlock =styled.header`
    width: 100%;

    .wrapper{
        padding:${theme.spacing.l}rem ${theme.spacing.xxl}rem ;
        background:${theme.colors.primary};
    }

    .util_wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .util{
            display: flex;
            align-items: center;
        }
    }
    .my-util_wrapper{
        display: flex;
        align-items: center;
        justify-content: start;
        color: ${theme.colors.white};
        
        font-weight: bold;
    }
    .menu_wrapper{
        display: flex;
        padding:${theme.spacing.m}rem ${theme.spacing.xxl}rem ;
        align-items: center;
        border-bottom: 1px solid black;
    }
`

const InputBlock = styled.input`
    width: 12rem;
    padding: .5rem 1rem;
`
const Header = ()=>{
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
                <Button label="캐시충전" ></Button>
                <Button label="내 서재" ></Button>
            </div>
        </div>
        <ul className="my-util_wrapper">
            <li>홈</li>
            <li>알림</li>
            <li>카트</li>
            <li>마이리디</li>
        </ul>
        </div>
        <ul className="menu_wrapper">
            <li>목록</li>
            <li>일반</li>
            <li>로맨스</li>
            <li>판타지</li>
            <li>만화</li>
            <li>BL</li>
        </ul>
        
    </HeaderBlock>
    );}

export default Header;
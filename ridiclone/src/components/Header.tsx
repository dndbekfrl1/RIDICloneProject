import React from "react";
import styled from 'styled-components';
import { theme } from "../theme/theme";
import Button from "./Button";

const HeaderBlock =styled.header`
    
    width: 100%;
    .wrapper{
        height: 6em;
        padding:0 2em;
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
        color: ${theme.colors.white};
    }
    .menu_wrapper{
        display: flex;
        align-items: center;
    }
`
const Header = ()=>{
return (
    <HeaderBlock>
        <div className="wrapper">
        <div className="util_wrapper">
            <div className="util">
                <div>
                    RIDIBOOKS <span>|</span>
                    RIDISelect
                </div>
                <input type="text" placeholder="제목, 저자, 출판사 검색" />
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
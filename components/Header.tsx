import React from "react";
import styled from 'styled-components';
import { theme } from "../theme/theme";
import Button from "./Button";

const HeaderBlock =styled.header`
    width: 100%;
    height: 6em;
    padding:0 2em;
    background:${theme.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .util{
        display: flex;
        align-items: center;
    }
`
const Header = ()=>{
return (
    <HeaderBlock>
        <div className="util">
            <div>
                RIDIBOOKS <span>|</span>
                RIDISelect
            </div>
            <input type="text" placeholder="제목, 저자, 출판사 검색" />
        </div>
        <div className="util">
            <Button size="normal" label="캐시충전" btn_color=""></Button>
            <Button size="normal" label="내 서재" btn_color=""></Button>
        </div>
    </HeaderBlock>
    );}

export default Header;
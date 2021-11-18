import React, { ReactChild, ReactChildren, ReactComponentElement, ReactElement, ReactNode, useState } from "react";
import styled from "styled-components";
import Heart from "../assets/icon/Heart";
import {theme} from "../theme/theme";


type SquareButtonBlockProps = {
    icon?:string,
    onClick:()=>{}
}

const SquareButtonBlock = styled.button`
    width: 2.45rem;
    height: 2.45rem;
    border:1px solid ${theme.colors.dark_gray};
    border-radius: ${theme.borderRadius}px;
    background: ${theme.colors.white};
    border:2px solid ${theme.colors.gray};
    display:flex;
    align-items: center;
    justify-content: center;
    :hover{
        background: ${theme.colors.white_gray};
    }
`

const SquareButton = ({icon}:SquareButtonBlockProps)=>{
    const[isLike, setIsLike] = useState(false);

    const onClick = ()=>{
        setIsLike(!isLike);
    };
    return(
        <SquareButtonBlock onClick={onClick}>
            {isLike? (<Heart color={theme.colors.dark_gray}/>):(<Heart color={theme.colors.red}/>)}
        </SquareButtonBlock>
)}
export default SquareButton;
import React from "react";
import styled from "styled-components"
import { theme } from "../theme/theme";

const BookInfoDetailBlock = styled.div`
    margin: ${theme.spacing.xl}rem 0;
    color: ${theme.fontColor.black};
    font-size: ${theme.fontSize.s}px;
    .title{
        font-size: ${theme.fontSize.m}px;
        color:${theme.fontColor.gray};
        border-bottom: 2px solid ${theme.colors.gray};
    }
`

type BookInfoDetailProps = {
    label:"저자 프로필"|"저자 소개"|"작품 소개"|"목차",
    description:string|string[],
}

const BookInfoDetail = ({label,description}:BookInfoDetailProps)=>(
    <BookInfoDetailBlock>
        <h3 className="title">{label}</h3>
        <div>{description}</div>
    </BookInfoDetailBlock>
)
export default BookInfoDetail;


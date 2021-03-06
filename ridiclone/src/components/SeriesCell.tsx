import React, { useState } from "react";
import { theme } from "../theme/theme";
import styled from "styled-components"
import Button from "./Button";

const CellBlock = styled.div`
    width: 100%;
    padding: 0 ${theme.spacing.s}rem;
    border-top: 1px solid ${theme.colors.gray};
    border-bottom:  1px solid ${theme.colors.gray};
    :hover{
        background: ${theme.colors.white_gray};
    }
    &.selected{
        background: ${theme.colors.light_blue};
    }

    .cell-wrapper{
        display: table;
        vertical-align: middle;
        width: 100%;
        height: 2.5rem;

        .checkbox{
            vertical-align: middle;
            display: table-cell;
        }
        .book-info{
            display: table-cell;
            vertical-align: middle;
            .label-free{
                float: left;
                padding: 0.1rem .15rem;
                margin:0 ${theme.spacing.s}rem;
                background: ${theme.colors.primary};
                color:${theme.colors.white};
                width: fit-content;
                border-radius:${theme.borderRadius}px;
                font-size: ${theme.fontSize.xs}px;
            }
            .title{
                font-size:${theme.fontSize.xs}px;
                color:${theme.fontColor.black};
                font-weight: bold;
            }
        }
        .view{
            vertical-align: middle;
            display: table-cell;
        }
    }
`

type SeriesCellProps = {
    title: string;
    isFree:boolean;
    isSelected:"selected"|"";
}

const SeriesCell = ({title,isFree,isSelected}:SeriesCellProps)=>{

    return(
    <CellBlock className={isSelected} > 
        <div className="cell-wrapper">
            <div className="checkbox">
                <input type="checkbox"/>
            </div>
            <div className="book-info">
                {isFree && (
                    <div className="label-free">무료</div>
                )}
                <div className="title">
                    {title}
                </div>
            </div>
            <div className="view">
                <Button size="small" btn_color="white" label="보기"/>
            </div>
        </div>
    </CellBlock>
    );
};

SeriesCell.defaultProps={
    isFree:false,
}


export default SeriesCell;
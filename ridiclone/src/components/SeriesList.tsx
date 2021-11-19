import React from "react";
import SeriesCell from "./SeriesCell";
import styled from "styled-components"
import Button from "./Button";
import { theme } from "../theme/theme";

const SeriesListBlock = styled.div`
    width: 100%;
    font-size: ${theme.fontSize.xs}px;

    .buy-option{
        width: 100%;
        padding: 0 ${theme.spacing.s}rem;
        border-bottom:  1px solid ${theme.colors.gray};

            .cell-wrapper{
            display: table;
            vertical-align: middle;
            width: 100%;
            height: 2.5rem;

            div{
                vertical-align: middle;
                display: table-cell;
            }
          
        }

    }
`

type SeriesListProps = {
    title:string,
    count:number,//총 권 수
    freeCount:number,// 무료 권 수 
}

const SeriesList = ({title,count,freeCount}:SeriesListProps)=>{
    const serieslist=()=>{
        const result=[];
        for(let i=1;i<=count;i++){
            const isFree=i<=freeCount? true:false;
            result.push(
            <SeriesCell title={title} isFree={isFree} isSelected="" />)
        }
        return result;
    }

    return(
        <SeriesListBlock>
            <div className="buy-option" > 
                <div className="cell-wrapper">
                    <div className="checkbox">
                        <input type="checkbox"/>
                        <span>전체선택</span>
                    </div>
                    <div className="book-info">
                        <Button size="small" btn_color="white" label="신간부터" />
                    </div>
                    <div>
                        총 0화
                        <span>0원</span>
                    </div>
                    <div>
                        <Button size="small" btn_color="white" label="카트담기" />
                    </div>
                    <div>
                        <Button size="small" btn_color="blue" label="선택구매" />
                    </div>
                </div>
            </div>
            {serieslist()}
        </SeriesListBlock>
    );
}

export default SeriesList;
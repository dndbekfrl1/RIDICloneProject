import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
import { theme } from "../theme/theme";

const TemplateBlock = styled.div`
    width: 100vw;
    min-width: 900px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .container{
        color: ${theme.fontColor.black};
        padding: ${theme.spacing.l}rem ${theme.spacing.xxl}rem ;
        min-height: 500px;
        h3{
            font-size: ${theme.fontSize.m}px;
        }
    }
   
`

const Template=(props:any)=>{

    return(
        <TemplateBlock>
            <div className="container">
                {props.children}
            </div>
            <Footer></Footer>
        </TemplateBlock>
    )       
}

export default Template;
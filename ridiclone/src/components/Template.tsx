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
        border: 2px solid tomato;
        padding: 0 ${theme.spacing.xxl}rem ;
    }
`

const Template=(props:any)=>(
    <TemplateBlock>
        <Header></Header>
        <div className="container">
            {props.children}
        </div>
        <Footer></Footer>
    </TemplateBlock>
)

export default Template;
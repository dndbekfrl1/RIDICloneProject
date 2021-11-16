import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

const TemplateBlock = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
    


const Template=(props:any)=>(
    <TemplateBlock>
        <Header></Header>
        {props.children}
        <Footer></Footer>
    </TemplateBlock>
)

export default Template;
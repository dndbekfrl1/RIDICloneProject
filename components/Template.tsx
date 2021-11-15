import React from "react";
import Header from "./Header";
import styled from "styled-components";

const TemplateBlock = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`
    


const Template=()=>(
    <TemplateBlock>
        <Header></Header>
    </TemplateBlock>
)

export default Template;
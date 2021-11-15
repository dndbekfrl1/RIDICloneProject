import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";

const LogoBlock = styled.div`
    font-size: 1.3rem;
    font-weight: bolder;
    color: ${theme.colors.white};
`

const Logo = ()=>(
    <LogoBlock>RIDIBOOKS</LogoBlock>
)

export default Logo;
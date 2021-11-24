import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme/theme";

const LogoBlock = styled.div`
    font-size: 1.3rem;
    font-weight: bolder;
    color: ${theme.colors.white};
`

const Logo = ()=>(
    <Link to="/">
        <LogoBlock>RIDIBOOKS</LogoBlock>
    </Link>
)

export default Logo;
import React from "react";
import styled from "styled-components"
import type {} from "styled-components/cssprop"
import { theme } from "../theme/theme";

const ButtonBlock = styled.div<{size?:string, btn_color?:string,point_color?:string, border_radius?:string}>`
display: flex;
align-items: center;
justify-content: center;
border-radius: ${(props)=>props.border_radius};
border:1px solid ${(props)=>props.point_color};
color: ${(props)=>props.point_color};
background:${(props)=>props.btn_color};
padding: 2px 4px;
cursor: pointer;
`

type ButtonProps = {
    label: string; //버튼 이름 
    size?:string;
    point_color?:string;
    btn_color?:string;
    border_radius?:string;
    icon?:string; //버튼 icon
  };
  
  const Button = ({size, border_radius, label,btn_color,point_color }: ButtonProps) => (
  <ButtonBlock

    btn_color={btn_color}
    point_color={point_color}
    border_radius={border_radius}
  >
    {label}
  </ButtonBlock>
  );
  
  Button.defaultProps = {
    label:"버튼",
    size:"normal",
    btn_color:theme.colors.primary,
    point_color:theme.colors.white,
    border_radius:"4px",
  };
  
  export default Button;
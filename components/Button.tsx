import React from "react";
import styled from "styled-components"
import type {} from "styled-components/cssprop"

const ButtonBlock = styled.div<ButtonProps>`
display: flex;
align-items: center;
justify-content: center;
width:${(props)=>props.size==="normal"?
"5em":"1em"
};
height:${(props)=>props.size==="normal"?
"2em":"1em"
};
border-radius: ${(props)=>props.border_radius};
border:2px solid;
background:${(props)=>props.btn_color}
`

type ButtonProps = {
    label: string; //버튼 이름 
    point_color?:string;
    btn_color?:string;
    border_radius?:string;
    icon?:string; //버튼 icon
    size?:string;
  };
  
  const Button = ({size, label,border_radius, btn_color }: ButtonProps) => (
    <Button>
    {label}
    </Button>

  );
  
  Button.defaultProps = {
    label:"버튼",
    size:"normal",
    btn_color:"red",
    point_color:"white",
    border_radius:"4px",
  };
  
  export default Button;
import React from "react";
import styled,{css} from "styled-components"
import { theme } from "../theme/theme";

const ButtonBlock = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: fit-content;
border-radius: ${theme.borderRadius}px;

cursor: pointer;

&.white{
  border:1px solid ${theme.colors.gray};
  color: ${theme.colors.dark_gray};
  background:${theme.colors.white};
}
&.blue{
  border:1px solid ${theme.colors.white};
  color: ${theme.colors.white};
  background:${theme.colors.primary};
}


&.small{
  height: ${theme.buttonSize.small.height};
  font-size:${theme.buttonSize.small.fontSize};
  padding: ${theme.buttonSize.small.padding};
}
&.medium{
  height: ${theme.buttonSize.medium.height};
  font-size:${theme.buttonSize.medium.fontSize};
  padding: ${theme.buttonSize.medium.padding};
}
&.large{
  height: ${theme.buttonSize.large.height};
  font-size:${theme.buttonSize.large.fontSize};
  padding: ${theme.buttonSize.large.padding};
}

`

type ButtonProps = {
    label: string; //버튼 이름 
    size:"small"|"medium"|"large";
    btn_color: "white"|"blue";
    icon?:string; //버튼 icon
  };
  
  const Button = ({size,label,btn_color }: ButtonProps) =>{ 
  
    return(
      <ButtonBlock
        className={[size,btn_color].join(' ')}
      >
        {label}
      </ButtonBlock>
      );
    };
  
  Button.defaultProps = {
    label:"버튼",
    size:"normal",
    btn_color:theme.colors.primary,
    point_color:theme.colors.white,
  };
  
  export default Button;
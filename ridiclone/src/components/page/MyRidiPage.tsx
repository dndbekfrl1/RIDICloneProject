import React from "react";
import Template from "../Template";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import USER_DATA from "../../data/USER_DATA.json";
import UserType from "../../type/user_type";

const ProfileBlock = styled.div`
    border: 2px solid ${theme.colors.dark_gray};
    background: ${theme.colors.light_blue};
    padding:${theme.spacing.m}rem;
    .email{
        font-size: ${theme.fontSize.xs}px;
        color: ${theme.fontColor.light_gray};
    }

`

const MyRidiPage = ()=>{
    const user:any = USER_DATA[0];
    return(
        <Template>
            <ProfileBlock>
                <div>
                    <h3>{user.id}</h3>
                    <p className="email">{user.emailAddr}</p>
                </div>
            </ProfileBlock>
        </Template>
    )
}

export default MyRidiPage;
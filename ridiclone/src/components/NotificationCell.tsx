import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";
import {ReactComponent as Alarm} from "../assets/icon/alarm.svg";

const NotificationBlock = styled.div`
    display: flex;
    font-size: ${theme.fontSize.s}px;
    color: ${theme.fontColor.black};
    align-items: center;
    p{margin:0; padding: 0;}
    border-bottom: 1px solid ${theme.colors.gray};
    padding: ${theme.spacing.m}rem 0;
    .banner{
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${theme.fontSize.s}px;
        border-radius: 12px;
        margin: 0 ${theme.spacing.m}rem 0 0;

        &.notice{
            svg{
                margin-top: ${theme.spacing.xs}rem;
            }
            background: ${theme.colors.notification_notice_bg};
        }
        &.event{
            background: ${theme.colors.notification_event_bg};
            color:${theme.colors.notification_event_font};
        }
    }
    .notification_wrapper{
        flex: 1;
        span{
            color:${theme.fontColor.light_gray};
        }
    }
    
`

type NotificationProps = {
    type:string,
    date:string,
    content:string,
}

const NotificationCell = ({type,date,content}:NotificationProps)=>{
    return(
    <NotificationBlock>
        {type==="공지"? (
            <div className="banner notice"> <Alarm width="20" fill={theme.colors.primary}/>   
            </div>):(<div className="banner event">{type}</div>)
        }
        <div className="notification_wrapper">
            <p>{content}</p>
            <span>{date}</span>
        </div>
    </NotificationBlock>)
}
export default NotificationCell;
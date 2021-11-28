import React from "react";
import styled from "styled-components";
import notification_type from "../type/notification_type"
import NotificationCell from "./NotificationCell";


const NotificationListBlock = styled.ul`
`

type NotificationListProps = {
    notifications:notification_type[]
}
type NotificationType = {
    
}

const NotificationList = ({notifications}:NotificationListProps)=>{
    return(
        <NotificationListBlock>
            {notifications.map((notification)=>{
                const tmp = notification.type;
                const tmp2:notification_type["type"]=tmp;
                return (
                <li>
                    <NotificationCell type={tmp2} content={notification.content} date={notification.date}  />
                </li>
            )})}
        </NotificationListBlock>
    )
}

export default NotificationList;
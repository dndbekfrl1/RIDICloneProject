import React from "react";
import styled from "styled-components";
import NotificationList from "../NotificationList";
import Template from "../Template";
import ALERT_DATA from "../../data/ALERT_DATA.json"

const NotificationPageBlock = styled.div`
    width: 100%;
`

const NotificationPage = ()=>{
    return(<Template>
        <NotificationPageBlock>
            <h3>알림</h3>
        <NotificationList notifications={ALERT_DATA} />
        </NotificationPageBlock>
    </Template>)
}

export default NotificationPage;
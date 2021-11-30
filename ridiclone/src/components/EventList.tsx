import React from "react";
import EVENT_DATA from "../data/EVENT_DATA.json";
import EventType from "../type/event_type";
import Event from "./Event";
import styled from "styled-components";
import { theme } from "../theme/theme";

const EventListBlock = styled.div`
    position: relative;
    ul{
        overflow: hidden;
        margin: 0;
        padding: 0;
        display: flex;
     }
    li{
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
    }
    button{
        position: absolute;
        top: 40%;
        width: 2.5rem;
        height:2.5rem;
        background: ${theme.colors.white};
        border:1px solid ${theme.colors.dark_gray};
        border-radius: 50%;
    }
    button.left{
            left:-16px;
    }
    button.right{
        right:-16px;
    }

      
`

const EventList= () =>{ 

    return(
        <EventListBlock>
            <button className="left"> ﹤ </button>
            <ul>
            {EVENT_DATA.map((event)=>(
                <li>
                    <Event event={event}/>
                </li>
            ))}
            </ul>
            <button className="right">  ﹥ </button>
        </EventListBlock>
    );
}

export default EventList;
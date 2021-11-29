import React from "react";
import EventType from "../type/event_type";
import styled from "styled-components"

const EventBlock = styled.div`
    .thumbnail{
        img{
            max-width: 12rem;
        border-radius: 6px;
            object-fit: cover;
        }
    }
`   

type EventProps = {
    event:EventType
}

const Event= ({event}:EventProps) =>{ 
    return(
        <EventBlock>
            <div className="thumbnail">
                <img src={event.thumbnail}/>
            </div>
        </EventBlock>
    );
}

export default Event;
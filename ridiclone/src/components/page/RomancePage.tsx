import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import Template from "../Template";

type RomancePageProps={
    isEbook:boolean
}

const RomnacePage = ({isEbook}:RomancePageProps)=>{
    return(
        <Template>
            {isEbook&&(
                <h1>어 이북이야</h1>
            )}
        </Template>
    )
}

export default RomnacePage;
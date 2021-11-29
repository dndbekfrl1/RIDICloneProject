import React from "react";
import Template from "../Template";
type FantasyPageProps={
    isEbook:boolean
}

const FantasyPage = ({isEbook}:FantasyPageProps)=>{
    return(
        <Template>
            {isEbook&&(
                <h1>어 이북이야</h1>
            )}
        </Template>
    )
}

export default FantasyPage;
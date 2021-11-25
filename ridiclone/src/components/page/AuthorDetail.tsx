import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import Template from "../Template";
import BOOK_DATA from "../../data/BOOK_DATA.json";

interface MatchParams {
    name: string;
  };


const AuthorDetail = ({match}:RouteComponentProps<MatchParams>)=>{
    console.log("match",match)
    const {name} = match.params;


    return(
    <Template>
        {name}
    </Template>
    );
}

export default AuthorDetail;
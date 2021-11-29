import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import queryString from 'query-string';
import Template from "../Template";
import SearchPublisher from "../SearchPublisher";
import styled from "styled-components";


interface MatchParams {
    query: string;
  };
  
const SearchPage = ({location,match}:RouteComponentProps<MatchParams>) =>{
    const pathname = location.pathname.split("/").pop();
    const search:string = location.search.replace(/\?q\=/g, "");
    let {query}:any = match.params;
    console.log("location?",pathname, search);
    return(
        <Template>
            {pathname==="publisher"?(
                <SearchPublisher publisher={search}></SearchPublisher>
            ):(
                {query} 
            )}
        </Template>
    );
}

export default SearchPage;
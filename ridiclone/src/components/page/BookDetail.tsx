import React from "react";
import { withRouter, RouteComponentProps } from "react-router";

interface MatchParams {
    postId: string;
  };

const BookDetail = ({match}:RouteComponentProps<MatchParams>)=>{
    console.log(match.params);
    const {id}:any =match.params;
    return<h2>{id}book detail</h2>;
};

export default BookDetail;
import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";
import BookType from "../type/book_type";
import Button from "./Button";
import "../App.css";

/**
 * 
 author: {
        name: "Quent Stopp",
        awards: ["Wilkinson-Jenkins"],
        representatives: ["3D Modeling", "UHV", "HSS", "Consumer Electronics"],
        representativesThumbnail:
          "https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg",
        introduction:
          "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
      },
 * 
 */

const PersonProfileBlock=styled.div`
    width: 600px;
    border: 10px solid ${theme.colors.gray};
    color: ${theme.fontColor.gray};
    font-size: ${theme.fontSize.s}px;
    padding: ${theme.spacing.m}rem ${theme.spacing.m}rem;


    p{
        padding: 0;
        margin: 0;
    }

    .name{
        color: ${theme.fontColor.black};
        font-size: ${theme.fontSize.m}px;
    }

    .author_info_wrapper{
        .author_info{
            display: flex;
        }
    }

    hr{
        border: 1px solid ${theme.colors.gray};
    }

`

type PersonProfileProps = {
    author : BookType["author"]|BookType["translator"],
};

const PersonProfile= ({author}:PersonProfileProps)=>{
    return(<PersonProfileBlock>
        <h3 className="name">{author.name}</h3>
        <Button label="작가 신간알림 소식" btn_color="blue" size="medium"/>
        <div className="author_info_wrapper">
            {"awards" in author? (
                <p className="author_info">수상 
                <div>
                    {author.awards?.map(award => (<p>{award}</p>))}
                </div>
                </p>
            ):("")}
            {"nationality" in author? (
                <p className="author_info">국적
                    <div>{author.nationality}</div>
                </p>
            ):("")}
        </div>

        <hr/>
        <p>
            {author.introduction}
        </p>
    </PersonProfileBlock>);
}

export default PersonProfile;
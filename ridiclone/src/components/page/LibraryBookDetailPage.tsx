import React from "react";
import {RouteComponentProps} from "react-router"
import Template from "../Template";
import { Link } from "react-router-dom";
import RentType from "../../type/rent_type";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import {ReactComponent as Star} from "../../assets/icon/star.svg";
import LibraryBookCell from "../LibraryBookCell";
import BOOK_DATA from "../../data/BOOK_DATA.json";

const BookDetailPageBlock = styled.div`
header{
    padding: ${theme.spacing.s}rem  ${theme.spacing.xxl}rem;
    border-bottom: 1px solid ${theme.colors.gray};
    h3{
        margin: ${theme.spacing.xs}rem 0;
    }
    .title{
        cursor: pointer;
    }
}
.book_info_wrapper{
    padding: ${theme.spacing.xl}rem 0 ;
    background: ${theme.colors.white_gray};
    .wrapper{
        padding: 0 250px;
        .book_info{
            display: flex;
            margin-bottom: ${theme.spacing.m}rem;
            div+div{
                margin: 0 ${theme.spacing.xl}rem;
            }
            .thumbnail{
                img{
                    max-width: 10rem;
                }
            }
            .meta_data{
                margin-top: ${theme.spacing.m}rem;
                .star_rate{
                    display: flex;
                    align-items: center;
                    font-size: ${theme.fontSize.s}px;
                }
                .rate{color:${theme.colors.star}}
                .rate_num{color:${theme.fontColor.light_gray}}
            }
        }

        .rent_wrapper{
            margin:${theme.spacing.m}rem 0 ;
        }
    }

}
`

interface MatchParams {
    id: string;
  };

type Book={
    book:RentType
} 


const LibraryBookDetailPage = ({match,history,location}:RouteComponentProps<MatchParams>)=>{
    const {book}:any = location.state;
    const{id} = match.params;

    return(
            <BookDetailPageBlock>
                <header>
                    <h3>내 서재</h3>
                     <div className="title" onClick={()=>history.goBack()}>
                        <span>←</span>{book.title}
                    </div>
                </header>

                <div className="book_info_wrapper">
                    <div className="wrapper">
                        <div className="book_info">
                            <div className="thumbnail">
                                <img src={book.thumbnail} alt="" />

                                <Link to={`/books/${id}`}>
                                    <p>서점에서 보기</p>
                                </Link>
                            </div>
                            <div className="meta_data">
                                <h3>{book.title}</h3>
                                <p>{book.author.name}</p>
                                <p>
                                    <div className="star_rate">
                                        <Star fill={theme.colors.star} width="12"/><span className="rate"><b>{book.starRate.rate}점</b></span> <span className="rate_num">
                                            ({book.starRate.rateNum}명)
                                        </span>
                                    </div>
                                </p>
                            </div>
                        </div>

                        <div className="description">
                            <h3>작품 소개</h3>
                            <p>
                                {book.description}
                            </p>
                        </div>
                        <hr/>
                        <div className="rent_wrapper">
                            <LibraryBookCell book={book}/>
                        </div>
                    </div>


                </div> 

               
            </BookDetailPageBlock>
    );
}

export default LibraryBookDetailPage;
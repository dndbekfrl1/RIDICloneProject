import React,{useState} from "react";
import BOOK_DATA from "../../data/BOOK_DATA.json";
import styled from "styled-components";
import Template from "../Template";
import { theme } from "../../theme/theme";
import BookCuration from "../BookCuration";

const BooksIndexBlock = styled.div`
    .category_wrapper{
        display: flex;
        justify-content: center;

        li{
        font-size: ${theme.fontSize.s}px;
        cursor: pointer;
        }
        li.active{
            color: ${theme.colors.primary};
        }
        li:hover{
            color: ${theme.colors.primary};
        }

    }
`

type BookCategoryPageProps={
    category:"romance"| "fantasy"| "humanities"| "thriller"| "detective"| "society"| "history"| "sf",
    isEbook:boolean
}

const getBooks = (type:string,category:string)=>{
    return BOOK_DATA.filter((book)=>book.type===type && book.category.includes(category));
}

const BookCategoryPage = ({category,isEbook}:BookCategoryPageProps)=>{
    const [menuIndex,setMenuIndex] = useState<number>(0);
    const changeMenu = (menuIndex:number)=>{
        setMenuIndex(menuIndex);
    }
    const menuList:any={
        0:"novel",
        1:"ebook"
    }
    const books = getBooks(menuList[menuIndex],category);
    console.log(books);

    return(
        <Template>
            <BooksIndexBlock>
            <ul className="category_wrapper">
                <li className={`${menuIndex===0? 'active' : ''}`} onClick={()=>changeMenu(0)}>웹소설</li>
                <span>|</span>
                <li className={`${menuIndex===1? 'active' : ''}`} onClick={()=>changeMenu(1)}>e북</li>
            </ul>
            {isEbook&&(
                <h1>어 이북이야</h1>
            )}
            <BookCuration header="리디 기다리면 무료 ﹥" books={books}/>
            </BooksIndexBlock>
        </Template>
    )
}

export default BookCategoryPage;
import React from "react";
import styled from "styled-components"
import Logo from "../Logo";
import RENT_DATA from "../../data/RENT_DATA.json"
import Template from "../Template";
import LibraryBookList from "../LibraryBookList";
const LibraryPageBlock = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;


    nav{
        ul{
            display: flex;
        }
    }
`


const LibraryPage=()=>{
    return(
        <Template>

        <LibraryPageBlock>
            <header>
                <div>
                    <h3>내 서재</h3>
                    <Logo/>
                </div>
            </header>

            <div>
                <LibraryBookList books={RENT_DATA}/>
            </div>

        </LibraryPageBlock>
        </Template>

    )
}
export default LibraryPage
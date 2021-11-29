import React from "react";
import styled from "styled-components"
import Logo from "../Logo";
import RENT_DATA from "../../data/RENT_DATA.json"
const LibraryPageBlock = styled.div`
 width: 100vw;
    min-width: 900px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`


const LibraryPage=()=>{
    return(
        <LibraryPageBlock>
            <header>
                <div>
                    <h3>내 서재</h3>
                    <Logo/>
                </div>
                <nav>
                    <ul>
                        <li>모든 책</li>
                        <li>책장</li>
                        <li>선호 작품</li>
                    </ul>
                </nav>
            </header>

            <div>

            </div>
            <footer>footer</footer>
        </LibraryPageBlock>
    )
}
export default LibraryPage
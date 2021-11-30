import React,{useState} from "react";
import Template from "../Template";
import styled from "styled-components";
import CartTab from "../CartTab";
import { theme } from "../../theme/theme";
import Button from "../Button";
import CART_DATA from "../../data/CART_DATA.json";
import CartType from "../../type/cart_type";

const WrapperBlock = styled.div`
    display: flex;
    margin: ${theme.spacing.m}rem 0;
`

const CartBlock = styled.div`
    width:65%;
`;
const SummaryBlock = styled.div`
    height: fit-content;
    flex: 1;
    margin:0 ${theme.spacing.xl}rem;
    border: 1px solid ${theme.colors.primary};
    padding:  ${theme.spacing.m}rem;
    font-size: ${theme.fontSize.s}px;
    

`;

const CartPage = ()=>{
    const cartList:CartType[] = CART_DATA;

    const[menuIndex,setMenuIndex] =useState<number>(0);
    const changeMenu = (menuIndex:number)=>{
        setMenuIndex(menuIndex);
    }

    const canRentBooks = cartList.filter((book)=>book.canRent==true);
  
    return(
        <>
        <Template>
            <h3>카트</h3>
            <WrapperBlock>
                    <CartBlock>
                        <CartTab menuIndex={menuIndex} onSelect={changeMenu} />
                    </CartBlock>
                    <SummaryBlock>
                        {menuIndex===0?(
                            <>
                            <p>{cartList.length}권을 선택하셨습니다.</p>
                            <div>
                                <p>총 상품 금액</p>
                                <p>{}</p>
                            </div>
                            <div>
                                <p>할인 금액</p>
                                <p>{}</p>
                            </div>
                            <div className="total_price-wrpper">
                                <p>합계</p>
                                <span>{}</span>
                            </div>
                            </>
                        ):(<>
                            <p>{canRentBooks.length}권을 선택하셨습니다.</p>
                            <div>
                                <p>총 상품 금액</p>
                                <p>{}</p>
                            </div>
                            <div>
                                <p>할인 금액</p>
                                <p>{}</p>
                            </div>
                            <div className="total_price-wrpper">
                                <p>합계</p>
                                <span>{}</span>
                            </div>
                            </>)}
                        
                        <Button label={"선택 구매하기"} btn_color="blue" size="large"/>
                    </SummaryBlock>
            </WrapperBlock>
        </Template>
        </>
    );
}
export default CartPage;
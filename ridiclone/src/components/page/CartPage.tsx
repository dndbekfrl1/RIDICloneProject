import React from "react";
import Template from "../Template";
import styled from "styled-components";
import CartTab from "../CartTab";
import { theme } from "../../theme/theme";
import Button from "../Button";

const WrapperBlock = styled.div`
    display: flex;
`

const CartBlock = styled.div`
    width:65%;
`;
const SummaryBlock = styled.div`
    height: 300px;
    flex: 1;
    margin:0 ${theme.spacing.xl}rem;
    border: 1px solid ${theme.colors.primary};

`;

const CartPage = ()=>{
    return(
        <>
        <Template>
            <WrapperBlock>
                    <CartBlock>
                        <CartTab/>
                    </CartBlock>
                    <SummaryBlock>
                        <p>{}권을 선택하셨습니다.</p>
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
                        <Button label={"선택 구매하기"} btn_color="blue" size="large"/>;
                    </SummaryBlock>
            </WrapperBlock>
        </Template>
        </>
    );
}
export default CartPage;
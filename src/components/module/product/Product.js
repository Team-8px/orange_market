import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";

const ProductLayOut = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  width: 358px;
`;

const ProductContainer = styled.ul`
  display: flex;
  font-size: 12px;
  line-height: 12px;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    height: 8px;
  }

  &:hover::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const ProductWrapper = styled.li`
  margin-right: 10px;
  cursor: pointer;
`;

const ProductImgWrapper = styled.div`
  border: 0.5px solid ${props => props.theme.palette["border"]};
  border-radius: 8px;
`;

const ProductImg = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
`;

const ProductTitle = styled.h2`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 16px;
  font-weight: 700;
`;

const TextWrap = styled.figcaption`
  padding-top: 6px;
`;

const ProductText = styled.strong`
  display: block;
  line-height: 18px;
  margin-bottom: 4px;
`;

const ProductPrice = styled.strong`
  display: block;
  font-size: 12px;
  color: ${props => props.theme.palette["main"]};
  font-weight: 700;
`;

export const ProductList = ({ productText, productPrice, img, onClick }) => {
  return (
    <ProductWrapper onClick={onClick}>
      <figure>
        <ProductImgWrapper>
          <ProductImg src={img} width="100%" />
        </ProductImgWrapper>
        <TextWrap>
          <ProductText>{productText}</ProductText>
          <ProductPrice>{productPrice}</ProductPrice>
        </TextWrap>
      </figure>
    </ProductWrapper>
  );
};

export function Product({ children }) {
  return (
    <ProductLayOut>
      <ProductTitle>판매 중인 상품</ProductTitle>
      <ProductContainer>{children}</ProductContainer>
    </ProductLayOut>
  );
}

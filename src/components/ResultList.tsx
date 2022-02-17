import styled from '@emotion/styled';
import { SupplementImage } from '@images';
import React from 'react';

export const ResultList = () => {
  return (
    <ItemBox>
      <ProductImage src={SupplementImage.src} alt="supplementImage" />
      <ProductInfoBox>
        <h3>브랜드</h3>
        <h2>제품 이름</h2>
      </ProductInfoBox>
    </ItemBox>
  );
};

const ItemBox = styled.li`
  display: flex;
`;

const ProductImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 5px;
  margin-right: 2rem;
`;

const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > h3 {
    font-size: 1rem;
    margin-bottom: 3px;
    color: #bbbbbb;
  }
  & > h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

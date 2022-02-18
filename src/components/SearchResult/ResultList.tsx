import styled from '@emotion/styled';
import { SupplementImage } from '@images';
import { DataTypes } from '@types';
import React from 'react';

interface ResultListProps {
  item: DataTypes;
}

export const ResultList = ({ item }: ResultListProps) => {
  const { brand, name } = item;
  return (
    <ItemBox>
      <ProductImage src={SupplementImage.src} alt="supplementImage" />
      <ProductInfoBox>
        <h3>{brand}</h3>
        <h2>{name}</h2>
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

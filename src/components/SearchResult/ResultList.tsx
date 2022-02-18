import { DEVICE } from '@constants';
import styled from '@emotion/styled';
import { SupplementImage } from '@images';
import { DataTypes } from '@types';
import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

interface ResultListProps {
  item: DataTypes;
}

export const ResultList = ({ item }: ResultListProps) => {
  const { brand, name } = item;
  return (
    <ItemBox>
      <ProductImage src={SupplementImage.src} alt="supplementImage" />
      <ProductInfoBox>
        {brand && <h3>{brand}</h3>}
        <h2>{name}</h2>
      </ProductInfoBox>
      <ViewButton>
        상세보기
        <BsChevronRight />
      </ViewButton>
    </ItemBox>
  );
};

const ItemBox = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  cursor: pointer;

  @media ${DEVICE.SMALL} {
    padding: 15px;
  }

  & + li {
    border-top: 1px solid #ddd;
  }

  &:hover {
    background-color: #fafafa;
    transition: all 0.2s ease-in-out;
  }
`;

const ProductImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 5px;
  margin-right: 2rem;
  @media ${DEVICE.SMALL} {
    margin-right: 10px;
  }
`;

const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  & > h3 {
    font-size: 1rem;
    margin-bottom: 3px;
    color: #bbbbbb;
  }
  & > h2 {
    font-size: 1.2rem;
    font-weight: 500;

    @media ${DEVICE.SMALL} {
      font-size: 1rem;
    }
  }
`;

const ViewButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;

  @media ${DEVICE.SMALL} {
    font-size: 15px;
  }

  svg {
    margin-top: 2px;
  }
`;

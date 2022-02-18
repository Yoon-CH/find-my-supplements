import React from 'react';
import styled from '@emotion/styled';
import { COLOR } from '@constants';
import { DataTypes } from '@types';
import { ResultList } from './';

interface SearchResultProps {
  list: DataTypes[];
}

export const SearchResult = ({ list }: SearchResultProps) => {
  return (
    <ResultContainer>
      {list.length ? (
        list
          .slice(0, 100)
          .map((item, index) => <ResultList key={index} item={item} />)
      ) : (
        <EmptyList>일치하는 아이템이 존재하지 않습니다.</EmptyList>
      )}
    </ResultContainer>
  );
};

const ResultContainer = styled.ul`
  width: 50vw;
  background-color: ${COLOR.WHITE};
  border-radius: 5px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.78);
  flex: 1;
  position: relative;
`;

const EmptyList = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 47%;
  font-size: 20px;
  transform: translateY(-50%);
  color: #bbb;
`;

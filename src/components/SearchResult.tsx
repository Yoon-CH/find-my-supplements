import { COLOR } from '@constants';
import styled from '@emotion/styled';
import React from 'react';
import { ResultList } from './ResultList';

export const SearchResult = () => {
  return (
    <ResultContainer>
      <ResultList />
    </ResultContainer>
  );
};

const ResultContainer = styled.ul`
  width: 50vw;
  padding: 1em;
  background-color: ${COLOR.WHITE};
  border-radius: 5px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.78);
`;

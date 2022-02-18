import { COLOR } from '@constants';
import styled from '@emotion/styled';
import { ProductContext } from '@pages';
import React, { useContext } from 'react';
import { ResultList } from './ResultList';

export const SearchResult = () => {
  const { data } = useContext(ProductContext);
  console.log(data.slice(0, 100));

  return (
    <ResultContainer>
      {data &&
        data
          .slice(0, 100)
          .map((item, index) => <ResultList key={index} item={item} />)}
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

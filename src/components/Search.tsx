import styled from '@emotion/styled';
import { ProductContext } from '@pages';
import React, { useContext } from 'react';
import { SearchForm } from './SearchForm';
import { SearchResult } from './SearchResult';

export const Search = () => {
  const { data } = useContext(ProductContext);
  return (
    <SearchSection>
      <SearchForm />
      <SearchResult />
    </SearchSection>
  );
};

const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 2em 0;
  width: 60rem;
  height: 100vh;
`;

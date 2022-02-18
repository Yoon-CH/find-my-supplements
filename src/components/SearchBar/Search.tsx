import styled from '@emotion/styled';
import { ProductContext } from '@pages';
import React, { useContext } from 'react';
import { SearchForm } from './SearchForm';

export const Search = () => {
  const { data } = useContext(ProductContext);
  console.log(data);

  return (
    <SearchSection>
      <SearchForm />
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
`;

import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { ProductContext } from '@pages';
import { SearchForm } from '@components/SearchBar';
import { SearchResult } from '@components/SearchResult';
import { DataTypes } from '@types';

export const SearchSection = () => {
  const [value, setValue] = useState('');
  const { data, setData } = useContext(ProductContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const filteredList = data.filter((item: DataTypes) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <SearchContainer>
      <SearchForm value={value} handleChange={handleChange} />
      <SearchResult list={filteredList} />
    </SearchContainer>
  );
};

const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 2em 0;
  max-width: 60rem;
  min-height: 100vh;
`;

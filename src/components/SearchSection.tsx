import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { ProductContext } from '@pages';
import { SearchForm } from '@components/SearchBar';
import { SearchResult } from '@components/SearchResult';
import { DataTypes } from '@types';
import { STYLE } from '@constants';

export const SearchSection = () => {
  const [value, setValue] = useState('');
  const { data, setData } = useContext(ProductContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const filteredList = data.filter((item: DataTypes) => {
    const filterName = item.name.toLowerCase().includes(value.toLowerCase());
    const filterBrand = item.brand.toLowerCase().includes(value.toLowerCase());
    return filterName || filterBrand;
  });

  console.log(filteredList);

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
  max-width: ${STYLE.MAX_WIDTH};
  min-height: 100vh;
`;

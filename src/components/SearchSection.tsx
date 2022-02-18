import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { ProductContext } from '@pages';
import { SearchForm } from '@components/SearchBar';
import { SearchResult } from '@components/SearchResult';
import { DataTypes } from '@types';
import { DEVICE, STYLE } from '@constants';
import axios from 'axios';

export const SearchSection = () => {
  const [value, setValue] = useState('');
  const [results, setResults] = useState<DataTypes[]>([]);
  const { data, setData } = useContext(ProductContext);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const products = await axios.get(`api/productList`, {
      params: { length: 20, text: e.target.value },
    });
    setResults(products.data.requests);
  };

  return (
    <SearchContainer>
      <SearchForm value={value} handleChange={handleChange} />
      <SearchResult list={results} />
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
  padding: 80px 0;
  @media ${DEVICE.MEDIUM} {
    padding: 80px 15px;
  }
  @media ${DEVICE.SMALL} {
    padding: 30px 15px;
  }
`;

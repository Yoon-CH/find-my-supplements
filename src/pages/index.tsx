import { createContext, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { Search } from '@components/SearchBar/Search';
import { SearchResult } from '@components/SearchResult';
import styled from '@emotion/styled';

export const ProductContext = createContext({
  data: [],
  setData: (data: any) => {},
});

const Home: NextPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const products = await axios.get('api/productList');
      setData(products.data.requests);
    })();
  }, []);
  return (
    <ProductContext.Provider value={{ data, setData }}>
      <Head>
        <title>나의 영양제 찾기</title>
      </Head>
      <Main>
        <SearchSection>
          <Search />
          <SearchResult />
        </SearchSection>
      </Main>
    </ProductContext.Provider>
  );
};

export default Home;

const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 2em 0;
  width: 60rem;
  height: 100%;
`;

const Main = styled.main`
  width: 100vw;
  height: auto;
  min-height: 100%;
  max-width: 100%;
  background-image: linear-gradient(to top, #43ddb2 0%, #72afd3 100%);
`;

import type { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { Search } from '@components/Search';
import styled from '@emotion/styled';

export const ProductContext = createContext({ data: [] });

const Home: NextPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const products = await axios.get('api/productList');
      setData(products.data.requests.requests);
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ data }}>
      <Head>
        <title>나의 영양제 찾기</title>
      </Head>

      <Main>
        <Search />
      </Main>
    </ProductContext.Provider>
  );
};

export default Home;

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to top, #43ddb2 0%, #72afd3 100%);
`;

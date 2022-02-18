import { createContext, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import styled from '@emotion/styled';
import { SearchSection } from '@components/SearchSection';
import { DataTypes } from '@types';

export const ProductContext = createContext({
  data: [] as DataTypes[],
  setData: (data: DataTypes[]) => {},
});
const Home: NextPage = () => {
  const [data, setData] = useState<DataTypes[]>([]);
  return (
    <ProductContext.Provider value={{ data, setData }}>
      <Head>
        <title>나의 영양제 찾기</title>
      </Head>
      <Main>
        <SearchSection />
      </Main>
    </ProductContext.Provider>
  );
};

export default Home;

const Main = styled.main`
  width: 100vw;
  height: auto;
  max-width: 100%;
  min-height: 100%;
  background: #f1f1f1;
`;

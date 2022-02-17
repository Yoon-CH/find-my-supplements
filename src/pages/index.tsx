import type { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { Search } from '@components/Search';

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

      <main>
        <Search />
      </main>
    </ProductContext.Provider>
  );
};

export default Home;

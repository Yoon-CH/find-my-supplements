import type { NextPage } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';
import { SearchSection } from '@components/SearchSection';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>나의 영양제 찾기</title>
      </Head>
      <Main>
        <SearchSection />
      </Main>
    </div>
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

import styled from '@emotion/styled';
import { Header } from '.';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <>{children}</>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100%;
`;

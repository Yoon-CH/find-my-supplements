import { Header } from '.';
import { Footer } from './Footer';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
};

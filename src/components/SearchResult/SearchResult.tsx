import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import styled from '@emotion/styled';
import { COLOR, DEVICE } from '@constants';
import { DataTypes } from '@types';
import { ResultList } from './';
import axios from 'axios';

interface SearchResultProps {
  list: DataTypes[];
  setResults: Dispatch<SetStateAction<DataTypes[]>>;
  inputValue: string;
  range: number;
  setRange: Dispatch<SetStateAction<number>>;
}

export const SearchResult = ({
  list,
  setResults,
  inputValue,
  range,
  setRange,
}: SearchResultProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const fetcher = useCallback(
    async entry => {
      if (list.length < 1) return;
      const target = entry[0];
      if (target.isIntersecting) {
        setRange(prev => prev + 15);
        const products = await axios.get(`api/productList`, {
          params: { length: range, text: inputValue },
        });
        setResults(products.data.requests);
      }
    },
    [inputValue, list]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(fetcher, options);
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, [fetcher]);

  console.log(list);

  return (
    <ResultContainer>
      {list.length ? (
        list.map((item, index) => <ResultList key={index} item={item} />)
      ) : (
        <EmptyList>일치하는 아이템이 존재하지 않습니다.</EmptyList>
      )}
      <div ref={itemRef}></div>
    </ResultContainer>
  );
};

const ResultContainer = styled.ul`
  position: relative;
  width: 50vw;
  height: 400px;
  overflow-y: scroll;
  background-color: ${COLOR.WHITE};
  border-radius: 5px;

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${COLOR.WHITE};
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #777;
  }

  @media ${DEVICE.MEDIUM} {
    width: 100%;
  }
`;

const EmptyList = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 47%;
  font-size: 20px;
  transform: translateY(-50%);
  color: #bbb;
`;

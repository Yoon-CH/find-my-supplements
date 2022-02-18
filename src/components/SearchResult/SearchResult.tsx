import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from '@emotion/styled';
import { COLOR } from '@constants';
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
  return (
    <ResultContainer>
      {list.length ? (
        list
          .slice(0, 100)
          .map((item, index) => <ResultList key={index} item={item} />)
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
  height: 39.5rem;
  overflow-y: scroll;
  background-color: ${COLOR.WHITE};
  border-radius: 5px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.78);
  /* flex: 1; */
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

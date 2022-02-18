import React, { useEffect, useRef } from 'react';
import { COLOR, DEVICE } from '@constants';
import styled from '@emotion/styled';

interface SearchFormProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchForm = ({ value, handleChange }: SearchFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <SearchFormContainer>
      <h3>
        나에게 딱 맞는 <span>영양제를 찾아보세요!</span>
      </h3>
      <Form onSubmit={e => e.preventDefault()}>
        <TextInput
          type="text"
          placeholder="찾으시는 영양제 이름 또는 브랜드명을 입력해주세요"
          value={value}
          onChange={handleChange}
          ref={inputRef}
        />
      </Form>
    </SearchFormContainer>
  );
};

const SearchFormContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
  h3 {
    font-size: 50px;
    margin-bottom: 20px;
    @media ${DEVICE.SMALL} {
      font-size: 30px;
      span {
        display: block;
      }
    }
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: ${COLOR.WHITE};
`;

const TextInput = styled.input`
  flex: 1;
  outline: none;
  font-size: 40px;
  font-weight: bold;
  &::placeholder {
    color: ${COLOR.BLACK_LIGHT};
  }
  @media ${DEVICE.SMALL} {
    font-size: 15px;
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  font-size: 1.5rem;
  background-color: #43ddb2;
  border-radius: 0 5px 5px 0;
  color: ${COLOR.WHITE};
  cursor: pointer;
`;

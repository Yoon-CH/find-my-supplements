import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { COLOR } from '@constants';
import styled from '@emotion/styled';

interface SearchFormProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchForm = ({ value, handleChange }: SearchFormProps) => {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <TextInput
        type="text"
        placeholder="찾으시는 영양제 이름 또는 브랜드명을 입력해주세요"
        value={value}
        onChange={handleChange}
      />
      <SearchButton type="submit">
        <BiSearch />
      </SearchButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 50vw;
  height: 5rem;
  margin: 5rem 0 1rem 0;
  padding-left: 1em;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.78);
  background-color: ${COLOR.WHITE};
`;

const TextInput = styled.input`
  flex: 1;
  outline: none;
  &::placeholder {
    color: ${COLOR.BLACK};
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

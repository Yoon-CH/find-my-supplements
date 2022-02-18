import React from 'react';
import styled from '@emotion/styled';
import { DEVICE, STYLE } from '@constants';

export const Header = () => {
  return (
    <HeaderBlock>
      <HeaderContainer>
        <Logo>
          <span>Find My Supplements</span>
          <h2>나의 영양제 찾기</h2>
        </Logo>
        <MenuList>
          <li>홈</li>
          <li className="active">분석/추천</li>
          <li>비교</li>
        </MenuList>
      </HeaderContainer>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.header`
  height: ${STYLE.HEADER_H};
  background: #fff;
  box-shadow: 0 4px 6px -6px #ccc;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: ${STYLE.MAX_WIDTH};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 100%;
`;

const Logo = styled.div`
  line-height: 1;
  cursor: pointer;
  span {
    color: #555;
    text-transform: uppercase;
  }
  h2 {
    margin-top: 2px;
    font-size: 26px;
  }
`;

const MenuList = styled.ul`
  display: flex;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 85px;
    height: ${STYLE.HEADER_H};
    font-size: 20px;
    position: relative;
    cursor: pointer;
    & + li {
      margin-left: 40px;
    }

    &:hover,
    &.active {
      font-weight: bold;
    }

    &.active::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      background: #333;
      bottom: 0;
    }
  }
  @media ${DEVICE.SMALL} {
    display: none;
  }
`;

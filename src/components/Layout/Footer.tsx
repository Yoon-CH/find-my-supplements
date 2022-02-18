import React from 'react';
import { COLOR, DEVICE, STYLE } from '@constants';
import styled from '@emotion/styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <CompanyInfo>
          <CompanyName>(주) 나의 영양제 찾기</CompanyName>
          <CompanyDetailInfo>
            대표 : 현호님소고기4조 | 이메일 : plsBeef.com
          </CompanyDetailInfo>
          <CompanyDetailInfo>
            사업자 등록번호 : 123-456-789 | 통신판매업신고번호 :
            제2022-원티드-프리온보딩-프론트엔드
          </CompanyDetailInfo>
          <CompanyDetailInfo>
            개인정보보호책임자 : 현호님소고기사조
          </CompanyDetailInfo>
          <CompanyDetailInfo>코드시 취업로 한다구</CompanyDetailInfo>
          <CompanyDetailInfo>고객센터: 12-345-678</CompanyDetailInfo>
        </CompanyInfo>
        <PageInfo>
          <PageDetailInfo>회사소개서</PageDetailInfo>
          <PageDetailInfo>사업/제휴 문의</PageDetailInfo>
          <PageDetailInfo>개인정보처리방침</PageDetailInfo>
        </PageInfo>
      </FooterBox>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 50px 0;
  @media ${DEVICE.MEDIUM} {
    padding: 30px;
  }
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${STYLE.MAX_WIDTH};
  margin: 0 auto;
`;

const CompanyInfo = styled.ul`
  color: ${COLOR.GRAY};
`;

const CompanyName = styled.h3`
  margin-bottom: 5px;
  font-weight: 500;
  color: ${COLOR.BLACK};
`;

const CompanyDetailInfo = styled.li`
  padding: 3px;
  font-size: 13px;
  font-weight: 300;
  color: ${COLOR.BLACK_LIGHT};
`;

const PageInfo = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${DEVICE.SMALL} {
    display: none;
  }
`;

const PageDetailInfo = styled.li`
  padding: 3px;
  font-size: 15px;
  color: ${COLOR.BLACK_LIGHT};
  cursor: pointer;
`;

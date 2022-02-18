import React from 'react';
import { COLOR } from '@constants';
import styled from '@emotion/styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <PageInfo>
        <PageDetailInfo>회사소개서</PageDetailInfo>
        <PageDetailInfo>사업/제휴 문의</PageDetailInfo>
        <PageDetailInfo>개인정보처리방침</PageDetailInfo>
      </PageInfo>
      <CompanyInfo>
        <CompanyBox>
          <Company>(주) 나의 영양제 찾기</Company>
        </CompanyBox>
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
    </FooterContainer>
  );
};

const CompanyBox = styled.div`
  display: flex;
  align-items: center;
`;

const Company = styled.h3`
  margin: 10px 5px;
  font-weight: 500;
  color: ${COLOR.BLACK};
`;

const CompanyDetailInfo = styled.li`
  padding: 3px;
  font-size: 13px;
  font-weight: 300;
  color: ${COLOR.BLACK};
`;

const CompanyInfo = styled.ul`
  float: left;
  padding: 30px 50px 30px 200px;
`;

const PageDetailInfo = styled.li`
  padding: 5px;
  margin-bottom: 20px;
  font-size: 15px;
  color: ${COLOR.BLACK};
  cursor: pointer;
`;

const PageInfo = styled.ul`
  float: right;
  padding: 30px 350px 30px 50px;
`;

const FooterContainer = styled.footer``;

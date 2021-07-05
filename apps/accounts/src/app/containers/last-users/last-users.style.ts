import styled from 'styled-components';

export const Section = styled.section``;

export const Header = styled.header``;

export const ActionText = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 1.2em;

  color: #ffffff;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.2em;

  margin-top: 16px;
  margin-bottom: 16px;

  color: #ffffff;
`;

export const ListWrapper = styled.ul`
  display: grid;
  gap: 16px;
`;

export const CardWrapper = styled.li`
  cursor: pointer;
`;

export const Footer = styled.footer`
  margin-top: 48px;

  a {
    text-decoration: underline;
    color: #ffffff;
  }
`;

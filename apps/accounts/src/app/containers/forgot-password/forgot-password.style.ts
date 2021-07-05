import styled from 'styled-components';

export const Container = styled.section``;

export const Header = styled.header``;

export const ActionText = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 1.2em;

  color: #ffffff;
`;

export const SigninText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2em;

  color: #ffffff;
  margin-top: 12px;

  > a {
    text-decoration: underline;
    color: #ffffff;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.2em;

  margin-top: 16px;

  color: #ffffff;
`;

export const EndTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.2em;

  margin-top: 16px;
  margin-bottom: 32px;
  max-width: 200px;

  color: #ffffff;
  text-align: center;
`;

export const EndContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > svg {
    display: inline-block;
    width: 120px;
    height: 120px;
    margin-top: 24px;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 16px;
  margin-top: 32px;
`;

export const InputGroup = styled.div``;

export const ButtonWrapper = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;

  > a {
    text-decoration: underline;
    color: #ffffff;
  }
`;

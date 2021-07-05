import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  margin-top: 12px;

  > a {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1em;

    text-decoration-line: underline;
    color: #ffffff;
  }
`;

export const Title = styled.h1`
  max-width: 250px;
  font-weight: bold;
  font-size: 28px;
  line-height: 1.2em;

  color: #ffffff;

  margin-bottom: 16px;
`;

export const Text = styled.p`
  max-width: 85%;

  font-style: 400;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.2em;

  margin-bottom: 16px;
  color: #ffffff;
`;

export const ButtonWrapper = styled.div`
  margin-top: 72px;

  display: flex;
  justify-content: flex-end;
`;

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

export const Text = styled.p`
  font-style: 400;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.2em;

  margin-bottom: 16px;
  color: #ffffff;
`;

export const CheckboxWrapper = styled.div`
  margin-top: 22px;
`;

export const TermsText = styled.p`
  > a {
    text-decoration: underline;
    color: #ffffff;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 22px;

  display: flex;
  justify-content: flex-end;
`;

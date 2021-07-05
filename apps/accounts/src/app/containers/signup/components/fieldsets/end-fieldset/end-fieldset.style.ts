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

export const Header = styled.header`
  display: flex;
  gap: 8px;
  min-height: 56px;
  color: ${({ resent }: { resent: boolean }) =>
    resent ? '#48fea7' : '#ffffff'};

  > svg {
    display: ${({ resent }: { resent: boolean }) =>
      resent ? 'block' : 'none'};
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.2em;

  max-width: 230px;
`;

export const Text = styled.p`
  font-style: 400;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.2em;

  margin-top: 31px;
  margin-bottom: 31px;

  color: #ffffff;

  > a {
    text-decoration: underline;
    color: #ffffff;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

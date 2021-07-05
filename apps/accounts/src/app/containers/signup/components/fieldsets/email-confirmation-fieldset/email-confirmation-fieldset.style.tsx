import styled from 'styled-components';

export const Fieldset = styled.fieldset``;

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

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2em;

  color: #ffffff;

  margin-top: 16px;
  margin-bottom: 16px;
`;

export const InputGroup = styled.div``;

export const InputCode = styled.input`
  &,
  &:focus {
    background-color: transparent;
    border: 2px solid #ffffff;
    border-radius: 10px;

    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 16px;

    color: #ffffff;

    text-align: center;

    height: 48px;
    width: 100%;

    margin-top: 8px;
    text-transform: uppercase;
  }
`;

export const ErrorText = styled.p`
  display: ${({ hide }: { hide: boolean }) => (hide ? 'none' : 'flex')};
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 16px;

  color: #ff2626;
`;

export const ResendText = styled.p`
  text-align: right;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.2em;

  color: #ffffff;
  margin-top: 16px;
`;

export const LinkButton = styled.button`
  display: inline;
  color: #ffffff;

  background-color: transparent;
  text-decoration: underline;

  cursor: pointer;
`;

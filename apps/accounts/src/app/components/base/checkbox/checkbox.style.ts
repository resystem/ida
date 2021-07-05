import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 12px;

  cursor: pointer;

  > svg {
    user-select: none;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.2em;

  color: #ffffff;
  user-select: none;
`;

import styled from 'styled-components';

export const Button = styled.button`
  background: #6a49ef;
  border-radius: 10px;
  padding: 12px 24px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;

  color: #ffffff;
  cursor: pointer;

  ${({ block }: { block: boolean }): string => {
    if (block) {
      return `
        width: 100%;
      `;
    }

    return '';
  }}
`;

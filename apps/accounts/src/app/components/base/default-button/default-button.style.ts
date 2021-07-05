import styled from 'styled-components';

export const Button = styled.button`
  min-width: 140px;
  height: 46px;
  background-color: #6a49ef;
  border-radius: 10px;
  padding: 12px 24px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;

  color: #ffffff;
  cursor: pointer;

  ${({ block, loading }: { block: boolean; loading: boolean }): string => {
    let text = ``;
    if (block) {
      text += `
        width: 100%;
      `;
    }

    if (loading) {
      text += `
        background-color: #320778;
      `;
    }

    return text;
  }}

  &:hover {
    background-color: #320778;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #aaaaaa;
  }
`;

export const Loading = styled.svg`
  width: 22px;
  height: 22px;
  animation-name: spin;
  animation-duration: 0.75s;
  animation-iteration-count: infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

export const Space = styled.div`
  margin-bottom: 32px;
`;

export const SpaceXXS = styled.div`
  margin-bottom: 24px;
`;

export const SpaceXXXS = styled.div`
  margin-bottom: 16px;
`;

export const Skeleton = styled.div`
  position: relative;
  display: block;
  width: ${({ width }: { width: string }) => width};
  height: 20px;

  background-color: #333;
  margin-bottom: 5px;

  &:nth-child(1) {
    margin-bottom: 13px;
  }

  &:nth-child(2) {
    margin-bottom: 25px;
  }

  &:nth-child(3) {
    margin-bottom: 18px;
  }

  &:nth-child(7) {
    margin-bottom: 47px;
  }

  &.rect {
    border-radius: 4px;
  }

  &.circle {
    border-radius: 50%;
  }

  &.text {
    height: 20px;
    transform: scale(1, 0.6);
    margin-top: 0;
    border-radius: 4px;
    margin-bottom: 0;
    transform-origin: 0 60%;
    line-height: 16px;
  }

  &.wave {
    overflow: hidden;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      animation: wave 1.6s linear 0.5s infinite;
      transform: translate(-100%);
      background: linear-gradient(90deg, transparent, #4a4a4a, transparent);
    }
  }

  &.pulse {
    overflow: hidden;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      animation: pulse 1.5s ease-in-out 0.5s infinite;
      background: #4a4a4a;
    }
  }

  @keyframes wave {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.4;
    }

    100% {
      opacity: 1;
    }
  }
`;

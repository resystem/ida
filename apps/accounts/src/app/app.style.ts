import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 100%;
  padding: 30px;

  @media (min-width: 1024px) {
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderContent = styled.header`
  position: absolute;
  width: 100%;
  max-height: 100vh;
  overflow-y: hidden;
  top: 0;
  left: 0;

  z-index: 1;
`;

export const BGSVG = styled.svg`
  width: 100%;
  height: auto;
`;

export const Main = styled.main`
  position: relative;
  display: grid;
  width: 100%;
  gap: 45px;

  z-index: 2;

  @media (min-width: 1024px) {
    padding: 60px 45px;
    max-width: 450px;

    border: solid 2px rgba(255, 255, 255, 0.1);
    border-radius: 16px;
  }
`;

import styled from 'styled-components';

// Assets
import landing from '../../assets/images/landing.svg';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.primary};
`;

export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background: url(${landing}) no-repeat 80% center;

  padding: 16px;

  @media (max-width: 400px) {
    background: none;

    justify-content: center;
  }
`;

export const Main = styled.main`
  max-width: 350px;

  @media (max-width: 400px) {
    margin-top: 48px;
  }

  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;

    @media (max-width: 400px) {
      font-size: 48px;
      line-height: 40px;
    }
  }

  p {
    margin-top: 45px;
    font-size: 24px;
    line-height: 34px;

    @media (max-width: 400px) {
      font-size: 18px;
      line-height: 28px;

      margin-top: 20px;
    }
  }
`;

export const Location = styled.div`
  position: absolute;

  right: 8px;
  top: 8px;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    font-weight: 800;
  }

  @media (max-width: 400px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const EnterLink = styled.a`
  position: absolute;

  right: 8px;
  bottom: 8px;

  width: 80px;
  height: 80px;

  font-size: 26px;

  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.terciary};
  }

  @media (max-width: 400px) {
    width: 40px;
    height: 40px;
    border-radius: 19px;

    font-size: 18px;
  }
`;

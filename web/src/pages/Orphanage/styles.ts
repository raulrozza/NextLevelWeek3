import styled from 'styled-components';
import { ImageButtonProps } from './types';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;

  .orphanage-details {
    width: 700px;
    margin: 64px auto;

    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 20px;

    overflow: hidden;

    & > img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 16px;

  margin: 16px 40px 0;
`;

export const ImageButton = styled.button<ImageButtonProps>`
  border: 0;
  height: 88px;
  background: none;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  outline: none;

  opacity: ${({ active }) => (active ? 1 : 0.6)};

  img {
    width: 100%;
    height: 88px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: 80px;

  h1 {
    color: ${({ theme }) => theme.colors.textDark};
    font-size: 54px;
    line-height: 54px;
    margin-bottom: 8px;
  }

  p {
    line-height: 28px;
    color: ${({ theme }) => theme.colors.textMain};
    margin-top: 24px;
  }

  hr {
    width: 100%;
    height: 1px;
    border: 0;
    background: ${({ theme }) => theme.colors.gray};
    margin: 64px 0;
  }

  h2 {
    font-size: 36px;
    line-height: 46px;
    color: ${({ theme }) => theme.colors.textDark};
  }

  .open-details {
    margin-top: 24px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;

    div {
      padding: 32px 24px;
      border-radius: 20px;
      line-height: 28px;

      svg {
        display: block;
        margin-bottom: 20px;
      }

      &.hour {
        background: ${({ theme }) => theme.colors.grayGradient1};
        border: 1px solid ${({ theme }) => theme.colors.bluishGray};
        color: ${({ theme }) => theme.colors.textMain};
      }

      &.open-on-weekends {
        background: ${({ theme }) => theme.colors.grayGradient2};
        border: 1px solid ${({ theme }) => theme.colors.quarternaryLight};
        color: ${({ theme }) => theme.colors.quarternaryDark};

        &.dont-open {
          background: ${({ theme }) => theme.colors.dangerGradient};
          border-color: ${({ theme }) => theme.colors.dangerLight};
          color: ${({ theme }) => theme.colors.danger};
        }
      }
    }
  }

  button.contact-button {
    margin-top: 64px;

    width: 100%;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.quarternary};
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 800;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;
  }

  button.contact-button svg {
    margin-right: 16px;
  }

  button.contact-button:hover {
    background: ${({ theme }) => theme.colors.quarternaryShift};
  }
`;

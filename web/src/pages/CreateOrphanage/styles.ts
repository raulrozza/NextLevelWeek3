import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  flex: 1;

  form.create-orphanage-form {
    width: 700px;
    margin: 64px auto;

    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 20px;

    padding: 64px 80px;

    overflow: hidden;

    .leaflet-container {
      margin-bottom: 48px;
      border-radius: 28px;
      border: 1px solid ${({ theme }) => theme.colors.gray2};

      overflow: hidden;
    }

    fieldset {
      border: 0;

      & + fieldset {
        margin-top: 80px;
      }

      legend {
        width: 100%;

        font-size: 32px;
        line-height: 34px;
        color: ${({ theme }) => theme.colors.textMain};
        font-weight: 700;

        border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
        margin-bottom: 40px;
        padding-bottom: 24px;
      }
    }

    .input-block {
      & + .input-block {
        margin-top: 24px;
      }

      label {
        display: flex;
        color: ${({ theme }) => theme.colors.textDarker};
        margin-bottom: 8px;
        line-height: 24px;

        span {
          font-size: 14px;
          color: ${({ theme }) => theme.colors.textDarker};
          margin-left: 24px;
          line-height: 24px;
        }
      }

      input,
      textarea {
        width: 100%;
        background: ${({ theme }) => theme.colors.whiteNotSoWhite};
        border: 1px solid ${({ theme }) => theme.colors.gray};
        border-radius: 20px;
        outline: none;
        color: ${({ theme }) => theme.colors.textMain};
      }

      input {
        height: 64px;
        padding: 0 16px;
      }

      textarea {
        min-height: 120px;
        max-height: 240px;
        resize: vertical;
        padding: 16px;
        line-height: 28px;
      }
    }

    button.confirm-button {
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

      svg {
        margin-right: 16px;
      }

      &:hover {
        background: ${({ theme }) => theme.colors.quarternaryShift};
      }
    }
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;

  .new-image {
    height: 96px;
    background: ${({ theme }) => theme.colors.whiteNotSoWhite};
    border: 1px dashed ${({ theme }) => theme.colors.primaryOpaque};
    border-radius: 20px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    height: 96px;
    object-fit: cover;

    border-radius: 20px;
  }

  input {
    display: none;
  }
`;

export const OpenOnWeekendsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  button {
    height: 64px;
    background: ${({ theme }) => theme.colors.whiteNotSoWhite};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.textMain};
    cursor: pointer;
  }

  button.active {
    background: ${({ theme }) => theme.colors.bluishWhite};
    border: 1px solid ${({ theme }) => theme.colors.quarternaryLight};
    color: ${({ theme }) => theme.colors.quarternaryDark};
  }

  button:first-child {
    border-radius: 20px 0px 0px 20px;
  }

  button:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 0;
  }
`;

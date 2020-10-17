import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 64px;
  background: ${({ theme }) => theme.colors.bluishWhite};
  border: 1px solid ${({ theme }) => theme.colors.bluishGray};
  border-radius: 20px;

  overflow: hidden;

  footer {
    padding: 20px 0;
    text-align: center;

    a {
      line-height: 24px;
      color: ${({ theme }) => theme.colors.dark};
      text-decoration: none;
    }

    z-index: 1000;
  }

  .leaflet-container {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
    border-radius: 20px;
  }
`;

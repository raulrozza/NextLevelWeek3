import styled from 'styled-components';

// Components
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;

  .leaflet-container {
    z-index: 5;
  }
`;

export const SideBar = styled.aside`
  width: 440px;

  background: ${({ theme }) => theme.colors.primary};

  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 42px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }

  footer {
    display: flex;
    flex-direction: column;
    line-height: 24px;

    strong {
      font-weight: 800;
    }
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const CreateOrphanageButton = styled(Link)`
  font-size: 32px;

  color: ${({ theme }) => theme.colors.white};

  position: absolute;

  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;
  border-radius: 28px;

  background: ${({ theme }) => theme.colors.quarternary};

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 10;

  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.quarternaryStrong};
  }
`;

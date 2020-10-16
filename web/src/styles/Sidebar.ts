import styled from 'styled-components';

const Sidebar = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: ${({ theme }) => theme.colors.primaryGradientLight};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 48px;
  }

  footer {
    a,
    button {
      width: 48px;
      height: 48px;

      border: 0;

      background: ${({ theme }) => theme.colors.primaryDark};
      border-radius: 16px;

      cursor: pointer;

      transition: background-color 0.2s;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: ${({ theme }) => theme.colors.primaryLight};
      }
    }
  }
`;

export default Sidebar;

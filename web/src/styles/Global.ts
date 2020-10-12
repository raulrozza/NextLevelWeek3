import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.bodyBg};
  }

  body, input, button, textarea {
    font: ${({ theme }) => theme.typography.nunito}
  }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)
  html { 
    @media (min-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (min-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }


  body { 
    --webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  
  body, input, button, textarea {
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

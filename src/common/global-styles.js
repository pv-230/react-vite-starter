import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --system-ui: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';

    --color-neutral-1: hsl(0, 0%, 95%);
    --color-neutral-2: hsl(0, 0%, 85%);
    --color-neutral-3: hsl(0, 0%, 75%);
    --color-neutral-4: hsl(0, 0%, 63%);
    --color-neutral-5: hsl(0, 0%, 50%);
    --color-neutral-6: hsl(0, 0%, 37%);
    --color-neutral-7: hsl(0, 0%, 25%);
    --color-neutral-8: hsl(0, 0%, 17%);
    --color-neutral-9: hsl(0, 0%, 9%);
    --color-neutral-10: hsl(0, 0%, 5%);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }
  
  body {
    font-family: var(--system-ui);
    overflow-x: hidden;
  }
`;

export default GlobalStyle;

import 'normalize.css';
import styled from 'styled-components';

import GlobalStyle from '../common/global-styles';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>Hello World</StyledApp>
    </>
  );
}

export default App;

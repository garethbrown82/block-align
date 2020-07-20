import React from 'react';
import { GridWrapper } from './components/GridWrapperComponent';
import styled from 'styled-components'

const StyledAlignment = styled.div`
  display: flex;
  align-items: center;
  padding-top: 100px;
  flex-direction: column;
`

function App() {
  return (
    <StyledAlignment>
      <GridWrapper />
    </StyledAlignment>
  );
}

export default App;

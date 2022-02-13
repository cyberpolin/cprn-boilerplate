import React from 'react';
import type {ReactNode} from 'react'

import styled from 'styled-components'

import {Wrapper} from '../../Components/Common'

const App: () => ReactNode = () => {
  return (
    <Wrapper>
      <H1>RECOVERY</H1>
    </Wrapper>
  );
};

const H1 = styled.Text`
  font-size: 24px;
  color: #FAFAFA;
`

export default App;

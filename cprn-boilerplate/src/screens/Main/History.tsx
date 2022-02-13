import React from 'react';
import type {ReactNode} from 'react'
import {Wrapper} from '../../Components/Common';

import styled from 'styled-components'

const App: () => ReactNode = ({navigation}) => {
  return (
    <Wrapper>
      <H1>History</H1>
    </Wrapper>
  );
};


const H1 = styled.Text`
  font-size: 24px;
  color: #FAFAFA;
`

export default App;

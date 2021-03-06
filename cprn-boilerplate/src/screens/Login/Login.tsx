import React from 'react';
import type {ReactNode} from 'react'

import styled from 'styled-components'
import {Button} from 'react-native-elements'
import {Wrapper} from '../../Components/Common'

const App: () => ReactNode = ({navigation}: any) => {
  return (
    <Wrapper>
      <H1>LOGIN</H1>
      <Button
        title={'Go to Recovery'}
        onPress={() => navigation.navigate('Recovery')}
      />
    </Wrapper>
  )
}

const H1 = styled.Text`
  font-size: 24px;
  color: #FAFAFA;
`

export default App;

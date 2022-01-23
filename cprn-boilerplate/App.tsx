/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {ReactNode} from 'react'
import LinearGradient from 'react-native-linear-gradient'

import Config from 'react-native-config'
import styled from 'styled-components'

const {APP_NAME} = Config

const App: () => ReactNode = () => {

  return (
    <Wrapper>
      <H1>{APP_NAME}</H1>
    </Wrapper>
  );
};

const Wrapper = styled(LinearGradient).attrs({
  colors: ['#6C24AA', '#190232'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const H1 = styled.Text`
  font-size: 24px;
  color: #FAFAFA;
`

export default App;

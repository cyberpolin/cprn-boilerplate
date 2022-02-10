import React from 'react';
import type {ReactNode} from 'react'
import LinearGradient from 'react-native-linear-gradient'

import Config from 'react-native-config'
import styled from 'styled-components'
import {Linking} from 'react-native'

const {APP_NAME, GITHUB_REPO} = Config

const App: () => ReactNode = () => {
  return (
    <Wrapper>
      <H1>LOGIN</H1>
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
  padding-left: 20px;
  padding-right: 20px;
`

const H1 = styled.Text`
  font-size: 24px;
  color: #FAFAFA;
`

const Info = styled.Text`
  font-size: 14px;
  color: #FDFDFD;
  margin-top: 20px;
  margin-bottom: 20px;
`

const Link = styled(Info)`
  color: #E0E0E0
`


export default App;

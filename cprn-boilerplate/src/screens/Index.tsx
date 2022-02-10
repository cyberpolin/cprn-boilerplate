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
import {Linking} from 'react-native'

const {APP_NAME, GITHUB_REPO} = Config

const App: () => ReactNode = () => {
  return (
    <Wrapper>
      <H1>{APP_NAME}</H1>
      <Info>
        Thank you for using my boilerplate, if you find it usefull please support it by adding a Start to it, and follow me at
      </Info>
      <Link onPress={() => Linking.openURL(GITHUB_REPO)}>
        https://github.com/cyberpolin/cprn-boilerplate
      </Link>
      <Info>
        You are almost done setting your app, I've written some tools and a set of isntructions, so if you will like for icons, and more settings follow the isntructions at
      </Info>
      <Link
        onPress={() =>
          Linking.openURL('https://cyberpolin.com/cprn-boilerplate')}>
        https://cyberpolin.com/cprn-boilerplate
      </Link>
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

import LinearGradient from 'react-native-linear-gradient'

import styled from 'styled-components'


export const Wrapper = styled(LinearGradient).attrs({
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
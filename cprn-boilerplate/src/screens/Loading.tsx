import * as React from 'react'
import {ActivityIndicator} from 'react-native'
import {Wrapper} from '../Components/Common'

export default function Loading() {
  return (
    <Wrapper>
      <ActivityIndicator />
    </Wrapper>
  )
}
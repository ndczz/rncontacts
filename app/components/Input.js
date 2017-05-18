import React from 'react'
import { TextInput, View, Text } from 'react-native'


export default function Input(props) {
  const { input, ...inputProps } = props
  const error = inputProps.meta.error

  return (
    <View>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
      {error && <Text>{error}</Text>}
    </View>
  )
}
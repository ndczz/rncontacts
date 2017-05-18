
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

class About extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>rncontacts v.-1.0</Text>
      </View>
    )
  }
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#E5AC0F',
  },
})
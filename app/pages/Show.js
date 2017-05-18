import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

class Show extends React.Component {

  constructor(props) {
    super(props)
    const person = props.navigation.state.params
    this.state = {
      name: person.name,
      surname: person.surname
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>name: {this.state.name}</Text>
        <Text>surname: {this.state.surname}</Text>
      </View>
    )
  }
}

export default Show

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#A5ACAF',
  },
})
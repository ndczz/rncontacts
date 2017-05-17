import React from 'react'
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
} from 'react-native'

class Create extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      nameOk: true,
      surnameOk: true,
      loading: false,
      person: null
    }
    this.isValid.bind(this)
    this.saveClicked.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.state.loading = nextProps.data.loading
    this.state.person = nextProps.data.person
    if (nextProps.data.person != null) {
      const { navActions } = this.props
      navActions.gotoBack()
    }
  }

  componentWillUpdate(nextProps, nextState) {
    nextState.loading = nextProps.data.loading
    nextState.person = nextProps.data.person
  }

  isValid() {
    let nm = this.state.name.length > 3
    let sn = this.state.surname.length > 3
    this.setState({ nameOk: nm })
    this.setState({ surnameOk: sn })
    return nm && sn
  }

  saveClicked() {
    if (this.isValid()) {
      const { personActions } = this.props
      const person = {
        name: this.state.name,
        surname: this.state.surname
      }
      personActions.createNewPerson(person)
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          editable={!this.state.loading}
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
          placeholder={'Name'} />

        <Text style={this.state.nameOk ? styles.textOk : styles.textBad}>
          Min length = 4
        </Text>

        <TextInput
          editable={!this.state.loading}
          value={this.state.surname}
          onChangeText={(text) => this.setState({ surname: text })}
          placeholder={'Surname'} />

        <Text style={this.state.surnameOk ? styles.textOk : styles.textBad}>
          Min length = 4
        </Text>

        <Button
          onPress={() => this.saveClicked()}
          disabled={this.state.loading}
          title='save this!' />

      </View>
    )
  }

}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#AACCFF',
  },
  textOk: {
    height: 0,
    width: 0
  },
  textBad: {
    color: 'red'
  }
})
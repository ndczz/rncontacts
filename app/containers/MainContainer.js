import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Main from '../pages/Main'
import * as personActionCreators from '../actions/persons'
import * as navActionCreators from '../actions/nav'
import * as notifyActionCreators from '../actions/notification'
import Icon from 'react-native-vector-icons/FontAwesome'


class MainContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Main',
    headerLeft: <Icon style={{ marginLeft: 16 }} name="bars" size={24} onPress={() => navigation.navigate('DrawerOpen')} />
  })

  render() { return <Main {...this.props} /> }
}

const mapStateToProps = (state) => {
  const data = state.persons
  const notification = state.notification
  return {
    data,
    notification
  }
}

const mapDispatchToProps = (dispatch) => {
  const personActions = bindActionCreators(personActionCreators, dispatch)
  const navActions = bindActionCreators(navActionCreators, dispatch)
  const notifyActions = bindActionCreators(notifyActionCreators, dispatch)
  return {
    personActions,
    navActions,
    notifyActions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
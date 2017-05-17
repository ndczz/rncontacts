import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Main from '../pages/Main'
import * as personActionCreators from '../actions/persons'
import * as navActionCreators from '../actions/nav'


class MainContainer extends React.Component {
  static navigationOptions = {
    title: 'Main'
  }

  render() { return <Main {...this.props} /> }
}

const mapStateToProps = (state) => {
  const data = state.persons
  return {
    data
  }
}

const mapDispatchToProps = (dispatch) => {
  const personActions = bindActionCreators(personActionCreators, dispatch)
  const navActions = bindActionCreators(navActionCreators, dispatch)
  return {
    personActions,
    navActions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
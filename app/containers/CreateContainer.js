import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Create from '../pages/Create'
import * as personActionCreators from '../actions/person'
import * as navActionCreators from '../actions/nav'


class CreateContainer extends React.Component {
  static navigationOptions = {
    title: 'Create'
  }

  render() { return <Create {...this.props} /> }
}

const mapStateToProps = (state) => {
  const data = state.person
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer)
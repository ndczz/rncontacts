import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Create from '../pages/Create'
import * as personActionCreators from '../actions/person'


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
  return {
    personActions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer)
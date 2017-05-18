import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Show from '../pages/Show'
import * as navActionCreators from '../actions/nav'


class ShowContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name} ${navigation.state.params.surname}`
  });

  render() { return <Show {...this.props} /> }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  const navActions = bindActionCreators(navActionCreators, dispatch)
  return {
    navActions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowContainer)
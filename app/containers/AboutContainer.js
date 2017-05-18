import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import About from '../pages/About'
import * as navActionCreators from '../actions/nav'
import Icon from 'react-native-vector-icons/FontAwesome'


class AboutContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'About :(',
    headerLeft: <Icon style={{ marginLeft: 16 }} name="bars" size={24} onPress={() => navigation.navigate('DrawerOpen')} />
  })

  render() { return <About {...this.props} /> }
}

export default AboutContainer
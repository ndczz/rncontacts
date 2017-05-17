import React from 'react'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import MainContainer from '../containers/MainContainer'
import CreateContainer from '../containers/CreateContainer'


export const AppNav = StackNavigator(
  {
    Main: { screen: MainContainer },
    Create: { screen: CreateContainer }
  }
)

class App extends React.Component {
  render() {
    return (
      <AppNav navigation={addNavigationHelpers(
        {
          dispatch: this.props.dispatch,
          state: this.props.nav
        }
      )} />
    )
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
})

export default connect(mapStateToProps)(App)
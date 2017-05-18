import React from 'react'
import { connect } from 'react-redux'
import { DrawerNavigator, StackNavigator, addNavigationHelpers } from 'react-navigation'
import MainContainer from '../containers/MainContainer'
import CreateContainer from '../containers/CreateContainer'
import ShowContainer from '../containers/ShowContainer'
import AboutContainer from '../containers/AboutContainer'


export const AppNav = StackNavigator(
  {
    Main: { screen: MainContainer },
    Create: { screen: CreateContainer },
    Show: { screen: ShowContainer }
  }
)

AppNav.navigationOptions = {
  title: 'Home'
}

export const AppNav2 = StackNavigator({
  About: { screen: AboutContainer }
})

AppNav2.navigationOptions = {
  title: 'About'
}

export const RootNav = DrawerNavigator({
  Home: { screen: AppNav },
  Info: { screen: AppNav2 }
}, {drawerWidth: 300})

class App extends React.Component {
  render() {
    return (
      <RootNav navigation={addNavigationHelpers(
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



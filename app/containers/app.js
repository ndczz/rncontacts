import { StackNavigator } from 'react-navigation'
import MainContainer from '../containers/MainContainer'
import CreateContainer from '../containers/CreateContainer'

const App = StackNavigator(
  {
    Main: { screen: MainContainer },
    Create: { screen: CreateContainer }
  }
)


export default App
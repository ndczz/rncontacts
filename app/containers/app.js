import { StackNavigator } from 'react-navigation'
import MainContainer from '../containers/MainContainer'

const App = StackNavigator(
  {
    Main: { screen: MainContainer }
  }
)


export default App
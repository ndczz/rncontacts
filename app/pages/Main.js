import React from 'react'
import {
  StyleSheet,
  ListView,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

class Main extends React.Component {

  constructor(props) {
    super(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      dataSource: dataSource.cloneWithRows(props.data.personList),
      refreshing: props.data.loading
    }

    this.renderItem = this.renderItem.bind(this)
  }

  componentDidMount() {

  }

  press(person) {
    console.log(`${person.name + ' ' + person.surname} clicked`)
  }

  renderItem(person) {
    const fullName = `${person.name} ${person.surname}`
    return (
      <TouchableOpacity onPress={() => this.press(person)}>
        <View>
          <Text>
            {fullName}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  refresh() {
    const { personActions } = this.props
    personActions.requestPersonList()
  }

  componentWillUpdate(nextProps, nextState) {
    nextState.dataSource = nextState.dataSource.cloneWithRows(nextProps.data.personList)
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this.renderItem}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.refresh()}
            />
          }
        />

      </View>
    )
  }

}

export default Main


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  list: {
    backgroundColor: '#ffcc11',
    flex: 1
  },
})
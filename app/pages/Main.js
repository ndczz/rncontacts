import React from 'react'
import {
  StyleSheet,
  ListView,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
  Button
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

    if (props.data.loading == false && props.data.personList.length == 0) {
      const { personActions } = props
      personActions.requestPersonList()
    }
  }

  press(person) {
    console.log(`${person.name + ' ' + person.surname} clicked`)
    const { navActions } = this.props
    navActions.gotoShow(person)
  }

  addPressed() {
    const { navActions } = this.props
    navActions.gotoCreate()
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
        <Button
          title='ADD!'
          onPress={() => this.addPressed()} />
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
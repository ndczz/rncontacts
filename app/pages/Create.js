import React from 'react'
import CreateForm from '../components/CreateForm'


class Create extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      nameOk: true,
      surnameOk: true,
      loading: false,
      person: null
    }
  }

  componentWillReceiveProps(nextProps) {
    this.state.loading = nextProps.data.loading
    this.state.person = nextProps.data.person
    if (nextProps.data.person != null) {
      const { navActions } = this.props
      navActions.gotoBack()
    }
  }

  componentWillUpdate(nextProps, nextState) {
    nextState.loading = nextProps.data.loading
    nextState.person = nextProps.data.person
  }

  render() {
    return (
      <CreateForm
        isLoading={this.state.loading}
      />
    )
  }

}

export default Create
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from './Input'
import { Button, View } from 'react-native'
import { onSubmitActions } from 'redux-form-submit-saga'


class CreateForm extends React.Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    const { handleSubmit, isLoading } = this.props
    return (
      <View>
        <Field
          name='name'
          editable={!isLoading}
          component={Input}
          placeholder='Name'
        />
        <Field
          name='surname'
          editable={!isLoading}
          component={Input}
          placeholder='Surname'
        />
        <Button
          onPress={handleSubmit}
          disabled={isLoading}
          title='Save' />
      </View>
    )
  }
}

export default reduxForm({ form: 'createForm', onSubmit: onSubmitActions('CREATE_FORM') })(CreateForm)
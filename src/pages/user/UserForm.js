import React from 'react';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { submitUserAction } from '../../actions/user/UserAction'

const UserFormFunc = props => {
  const { handleSubmit } = props

  const submit = (data, submitUserAction) => {
    submitUserAction(data)
  }

  return (
    <form onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))} >
      <label htmlFor="">
         Name:
      </label>
      <Field type="text" component='input' name='nome' className='inputForm' />
     <br/><br/>
      <label htmlFor="">
        Email:
      </label>
      <Field type="text" component='input' name='email' className='inputForm'/>
      <br/>
      <button type='submit' className='buttonForm'>Submit</button>
    </form>
  )

}

const UserForm = (reduxForm({
  form: 'formUser'
}))(UserFormFunc)

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { submitUserAction })(UserForm)
import React from 'react';
import {reduxForm} from 'redux-form'
import {connect} from 'react-redux'

const UserFormFunc = props =>{
  return(
    <form action="" >
      <label htmlFor="">
        Name:
      </label><br/>
      <input type="text" component='input' name='name'/>
<br/>
      <label htmlFor="">
        Email:
      </label><br/>
      <input type="text" component='input' name='email'/>
    </form>
  )

}

const UserForm = (reduxForm({
  form:'formUser'
}))(UserFormFunc)

const mapStateToProps = state =>({})

export default connect(mapStateToProps)(UserForm)
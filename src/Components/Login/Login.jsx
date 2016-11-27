import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import './Login.css'
import { api } from '../../rest/api.js'
import $ from '../../../node_modules/jquery/dist/jquery.min'
import { handlers } from '../../rest/user-management.js'
export default class Login extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className='ui middle aligned center aligned grid'>

        <div className='column'>
          <h2 className='ui blue image header'><img src='images/logo.png' className='image' role='presentation' /> <div className='content'> Log-in to your account </div></h2>
          <form className='ui large form' >
            <div className='ui stacked segment'>
              <div className='field'>
                <div className='ui left icon input'>
                  <i className='user icon' />
                  <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    />
                </div>
              </div>
              <div className='field'>
                <div className='ui left icon input'>
                  <i className='lock icon' />
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    />
                </div>
              </div>

              <div className='ui fluid large blue submit button'>
                Login
              </div>
            </div>
            <div className='ui error message'></div>
          </form>
          <div className='ui message'>
            New to us? <Link to='/registration'>Sign up</Link>
          </div>
          <div className='errorMsg'></div>
        </div>
      </div>

    )
  }

  componentDidMount() {
    window.jQuery('.ui.form')
      .form({
        fields: {
          email: {
            identifier: 'username',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your username'
              }
            ]
          },
          password: {
            identifier: 'password',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your password'
              },
              {
                type: 'length[3]',
                prompt: 'Your password must be at least 3 characters'
              }
            ]
          }
        },
        inline: true,
        onSuccess: this.login
      })
  }
  login(e) {
    e.preventDefault()
    $.ajax({
      method: 'POST',
      url: api.serviceBaseUrl + 'user/' + api.appID + '/login',
      headers: { 'Authorization': 'Basic ' + btoa(api.appID + ':' + api.appSecret) },
      data: {
        username: e.target[0].value,
        password: e.target[1].value
      },
      success: handlers.successHandler,
      error: handlers.errorHandler

    })
  }

}


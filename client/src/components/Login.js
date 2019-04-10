/* eslint-disable no-constant-condition */
import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { client } from '../Client';

class Login extends Component {
  state = {
    loginInProgess: false,
    shouldRedirect: false,
  };

  preformLogin = () => {
    this.setState({ loginInProgess: true });
    client.login().then(() => (
      this.setState({ shouldRedirect: true })
    ));
  };

  render() {
    if (this.state.shouldRedirect) {
      return (
        <Redirect to='/albums' />
      );
    } else {
      return (
        <div className='ui one column centered grid'>
          <div className='ten wide column'>
            <div
              className='ui raised very padded text container segment'
              style={{ textAlign: 'center' }}
            >
              <h2 className='ui green header'>
                Fullstack Music
              </h2>
              {
                this.state.loginInProgess
                  ? (<div className='ui active centered inline loader'/>)
                  : (<div className='ui large green submit button' onClick={this.preformLogin}> Login </div>)
              }
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Login;

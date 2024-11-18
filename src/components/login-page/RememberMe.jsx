import React, { Component } from 'react'

export default class RememberMe extends Component {
  render() {
    return (
      <div className='below-inputs'>
        <label htmlFor="remember-me">Remember me</label>
        <input type="checkbox" name="remember-me" />
        <a href="#">Forgot Password</a>
      </div>
    )
  }
}

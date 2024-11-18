import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div className="container-input">
        <label htmlFor={this.props.labelFor}>{this.props.labelText}</label>
        <input type={this.props.inputType} name={this.props.inputName} className={this.props.inputClass}/>
      </div>
    )
  }
}
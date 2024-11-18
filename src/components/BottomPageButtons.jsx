import React, { Component } from 'react'

export default class BottomPageButtons extends Component {
  render() {
    return (
      <div className="bottomPageButtons">
        <p>{this.props.bottomPageText} <a href="#">{this.props.bottomPageButtonText}</a></p>
      </div>
    )
  }
}

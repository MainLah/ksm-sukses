import React from 'react'

export default function BottomPageButtons() {
  return (
  <div className="bottomPageButtons">
    <p>{this.props.bottomPageText} <a href="#">{this.props.bottomPageButtonText}</a></p>
  </div>
  )
}


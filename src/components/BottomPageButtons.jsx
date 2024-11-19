import React from 'react'

export default function BottomPageButtons(props) {
  const {bottomPageText, bottomPageButtonText} = props

  return (
  <div className="bottomPageButtons">
    <p>{bottomPageText} <a href="#">{bottomPageButtonText}</a></p>
  </div>
  )
}


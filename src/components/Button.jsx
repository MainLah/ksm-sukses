import React from 'react'

export default function Button(props) {
  const {buttonText = "Button", className = 'bg-black'} = props

  return (
    <button className={className}>{buttonText}</button>
  )
}


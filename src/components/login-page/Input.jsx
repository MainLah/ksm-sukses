import React from 'react'

export default function Input(props) {
  const {labelFor, labelText, inputType, inputName, inputClass} = props
  return (
    <div className="container-input">
      <label htmlFor={labelFor}>{labelText}</label>
      <input type={inputType} name={inputName} className={inputClass}/>
    </div>
  )
}

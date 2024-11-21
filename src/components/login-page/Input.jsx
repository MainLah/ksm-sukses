import React from "react";

export default function Input(props) {
  const { labelFor, labelText, inputType, inputName, inputClass } = props;
  return (
    <div className="container-input flex flex-col">
      <label htmlFor={labelFor}>{labelText}</label>
      <input type={inputType} name={inputName} className={inputClass} />
    </div>
  );
}

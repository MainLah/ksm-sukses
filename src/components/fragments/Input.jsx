import React from "react";

export default function Input(props) {
  const { labelFor, labelText, inputType, inputName, inputClass, placeholder } =
    props;
  return (
    <div className="container-input flex flex-col">
      <label htmlFor={labelFor} className="mt-[1rem]">
        {labelText}
      </label>
      <input
        type={inputType}
        name={inputName}
        className={inputClass}
        placeholder={placeholder}
      />
    </div>
  );
}
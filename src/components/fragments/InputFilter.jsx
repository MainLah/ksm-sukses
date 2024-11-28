import React from "react";

export default function InputFilter(props) {
  const { children } = props;
  return (
    <div>
      <input type="checkbox" name={children} />
      <label htmlFor={children} className="pl-3 font-bold">
        {children}
      </label>
    </div>
  );
}

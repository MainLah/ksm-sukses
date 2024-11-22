import React from "react";

export default function MainText(props) {
  const { welcomingText } = props;
  return (
    <div className="container-main-text">
      <h1 class="most-wazted text-center text-5xl">{welcomingText}</h1>
      <p class="login-quote text-center">
        "Never let them know your next move"
      </p>
    </div>
  );
}

import React from "react";

export default function Logo() {
  function handleLogoClick() {
    window.location.href = "/home";
  }
  return (
    <h1
      class="most-wazted logo text-3xl text-center cursor-pointer"
      onClick={handleLogoClick}
    >
      Sneaker
      <br />
      Scout
    </h1>
  );
}

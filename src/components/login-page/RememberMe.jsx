import React from "react";

export default function rememberMe() {
  return (
    <div className="below-inputs">
      <label htmlFor="remember-me">Remember me</label>
      <input type="checkbox" name="remember-me" />
      <a href="#">Forgot Password</a>
    </div>
  );
}

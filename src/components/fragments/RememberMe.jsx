import React from "react";

export default function rememberMe() {
  return (
    <div className="below-inputs flex justify-between my-[1rem]">
      <div className="remember-me-div">
        <input type="checkbox" name="remember-me" className="mr-2" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <a href="#">Forgot Password</a>
    </div>
  );
}
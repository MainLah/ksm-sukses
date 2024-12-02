import React from "react";

export default function rememberMe() {
  return (
    <div className="below-inputs flex justify-between mt-5 mb-2">
      <div className="remember-me-div">
        <input type="checkbox" name="remember-me" className="mr-2" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <a href="#">Forgot Password</a>
    </div>
  );
}

import React from "react";
import Logo from "../components/fragments/Logo";
import MainText from "../components/fragments/MainText";
import Input from "../components/fragments/Input";
import RememberMe from "../components/fragments/RememberMe";
import Button from "../components/fragments/Button";
import BottomPageButtons from "../components/fragments/BottomPageButtons";

function handleLogin(event) {
  event.preventDefault();
  if (
    localStorage.getItem("email") === event.target.email.value &&
    localStorage.getItem("password") === event.target.password.value
  ) {
    window.location.href = "/home";
  } else if (!event.target.email.value || !event.target.password.value) {
    alert("Email or Password Cannot Be Empty!");
  } else {
    alert("Email or Password is Incorrect!");
  }
}

function LoginPage() {
  return (
    <div className="flex justify-between">
      <div className="container-logo m-5">
        <Logo />
      </div>
      <div className="flex flex-col justify-center min-h-screen">
        <div className="container-form min-w-full">
          <div className="container-main-text mb-[1rem]">
            <MainText welcomingText="WELCOME BACK !" />
          </div>
          <div className="container-email-pw">
            <form action="submit" onSubmit={handleLogin}>
              <Input
                labelFor="email"
                labelText="Email"
                inputName="email"
                inputType="email"
                inputClass="email-pw-form border-slate-600 w-[450px] h-[69px] placeholder:px-[1rem] border-[1px]"
                placeholder="Enter your email"
              />
              <Input
                labelFor="password"
                labelText="Password"
                inputName="password"
                inputType="password"
                inputClass="email-pw-form border-slate-600 w-[450px] h-[69px] placeholder:px-[1rem] border-[1px]"
                placeholder="********"
              />
              <RememberMe />
              <div className="sign-in-buttons flex flex-col">
                <Button
                  buttonText="Sign In"
                  className="bg-black text-white py-1 px-6 my-3 w-[450px] h-[62px]"
                />
                <Button
                  buttonText="Sign In With Google"
                  className="bg-white py-1 px-6 my-3 w-[450px] h-[62px] border-[1px] border-slate-300"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="bottomPageButton">
          <BottomPageButtons
            bottomPageText="New To SneakerScout?"
            bottomPageButtonText="Sign Up"
            linkTo="/signup"
          />
        </div>
      </div>
      <div className="container-login-img">
        <img
          src="/loginpageimg.jfif"
          alt="Jordan 1s"
          className="max-h-screen"
        />
      </div>
    </div>
  );
}

export default LoginPage;

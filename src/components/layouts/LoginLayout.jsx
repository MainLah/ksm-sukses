import React from "react";
import Logo from "../fragments/Logo";
import MainText from "../fragments/MainText";
import Input from "../fragments/Input";
import RememberMe from "../fragments/RememberMe";
import Button from "../fragments/Button";
import BottomPageButtons from "../fragments/BottomPageButtons";

function LoginLayout() {
  return (
    <div className="flex justify-between">
      <div className="container-logo">
        <Logo />
      </div>
      <div className="flex flex-col justify-center min-h-screen">
        <div className="container-form min-w-full">
          <div className="container-main-text mb-[1rem]">
            <MainText />
          </div>
          <div className="container-email-pw">
            <Input
              labelFor="email"
              labelText="Email"
              inputName="email"
              inputType="email"
              inputClass="email-pw-form border-slate-600 w-[450px] h-[69px]"
              placeholder="Enter your email"
            />
            <Input
              labelFor="password"
              labelText="Password"
              inputName="password"
              inputType="password"
              inputClass="email-pw-form border-slate-600 w-[450px] h-[69px]"
              placeholder="********"
            />
          </div>
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
        </div>
        <div className="bottomPageButton">
          <BottomPageButtons
            bottomPageText="New To SneakerScout?"
            bottomPageButtonText="Sign Up"
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

export default LoginLayout;
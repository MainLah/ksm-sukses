import React from "react";
import Logo from "../fragments/Logo";
import MainText from "../fragments/MainText";
import Input from "../fragments/Input";
import RememberMe from "../fragments/RememberMe";
import Button from "../fragments/Button";
import BottomPageButtons from "../fragments/BottomPageButtons";

function SignUpLayout() {
  return (
    <div className="flex justify-between">
      <div className="container-logo">
        <Logo />
      </div>
      <div className="flex flex-col justify-center min-h-screen">
        <div className="container-form min-w-full">
          <div className="container-main-text mb-[1rem]">
            <MainText welcomingText="START YOUR JOURNEY WITH US!" />
          </div>
          <div className="container-email-pw">
            <Input
              labelFor="username"
              labelText="Username"
              inputName="username"
              inputType="text"
              inputClass="email-pw-form border-slate-600 w-[450px] h-[69px] placeholder:px-[1rem]"
              placeholder="Enter your Username"
            />
            <Input
              labelFor="email"
              labelText="Email"
              inputName="email"
              inputType="email"
              inputClass="email-pw-form border-slate-600 w-[450px] h-[69px] placeholder:px-[1rem]"
              placeholder="Enter your Email"
            />
            <Input
              labelFor="password"
              labelText="Password"
              inputName="password"
              inputType="password"
              inputClass="email-pw-form border-slate-600 w-[450px] h-[69px] placeholder:px-[1rem]"
              placeholder="********"
            />
            <Input
              labelFor="password"
              labelText="Confirm Password"
              inputName="password"
              inputType="password"
              inputClass="email-pw-form border-slate-600 w-[450px] h-[69px] placeholder:px-[1rem]"
              placeholder="********"
            />
          </div>
          <RememberMe />
          <div className="sign-up-buttons flex flex-col">
            <Button
              buttonText="Sign Up"
              className="bg-black text-white py-1 px-6 my-3 w-[450px] h-[62px]"
            />
          </div>
        </div>
        <div className="bottomPageButton">
          <BottomPageButtons
            bottomPageText="Already Have An Account?"
            bottomPageButtonText="Sign In"
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

export default SignUpLayout;

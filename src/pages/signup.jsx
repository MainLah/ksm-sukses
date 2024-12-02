import React from "react";
import Logo from "../components/fragments/Logo";
import MainText from "../components/fragments/MainText";
import Input from "../components/fragments/Input";
import ReceiveNews from "../components/fragments/ReceiveNews";
import Button from "../components/fragments/Button";
import BottomPageButtons from "../components/fragments/BottomPageButtons";

function handleRegister(event) {
  event.preventDefault();
  if (event.target.password.value !== event.target.confirmPassword.value) {
    alert("Confirm Password Incorrect!");
  }
  if (localStorage.getItem(event.target.email.value)) {
    alert("Email is already registered!");
  }
  localStorage.setItem("userName", event.target.username.value);
  localStorage.setItem("email", event.target.email.value);
  localStorage.setItem("password", event.target.password.value);
  window.location.href = "/";
}

function SignUpPage() {
  return (
    <div className="flex justify-between">
      <div className="container-logo text-center m-5">
        <Logo />
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="container-form min-w-full">
          <div className="container-main-text mb-[1rem]">
            <MainText welcomingText="START YOUR JOURNEY WITH US!" />
          </div>
          <div className="container-email-pw">
            <form onSubmit={handleRegister}>
              <Input
                labelFor="username"
                labelText="Username"
                inputName="username"
                inputType="text"
                inputClass="email-pw-form border-slate-600 w-full h-[69px] placeholder:px-[1rem] border"
                placeholder="Enter your Username"
              />
              <Input
                labelFor="email"
                labelText="Email"
                inputName="email"
                inputType="email"
                inputClass="email-pw-form border-slate-600 w-full h-[69px] placeholder:px-[1rem] border"
                placeholder="Enter your Email"
              />
              <Input
                labelFor="password"
                labelText="Password"
                inputName="password"
                inputType="password"
                inputClass="email-pw-form border-slate-600 w-full h-[69px] placeholder:px-[1rem] border"
                placeholder="********"
              />
              <Input
                labelFor="password"
                labelText="Confirm Password"
                inputName="confirmPassword"
                inputType="password"
                inputClass="email-pw-form border-slate-600 w-full h-[69px] placeholder:px-[1rem] border"
                placeholder="********"
              />
              <ReceiveNews />
              <div className="sign-up-buttons flex flex-col">
                <Button
                  buttonText="Sign Up"
                  className="bg-black text-white py-1 px-6 my-3 w-full h-[62px]"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="bottomPageButton5">
          <BottomPageButtons
            bottomPageText="Already Have An Account?"
            bottomPageButtonText="Sign In"
            linkTo="/login"
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

export default SignUpPage;

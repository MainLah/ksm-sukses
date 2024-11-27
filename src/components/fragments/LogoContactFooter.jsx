import React from "react";
import Logo from "./Logo";
import NavbarItem from "./NavbarItem";

export default function LogoContactFooter() {
  return (
    <div className="flex flex-col">
      <Logo />
      <ul className="flex flex-row justify-between py-3">
        <NavbarItem icon="bi bi-instagram text-2xl text-[#F5F4F4]" />
        <NavbarItem icon="bi bi-twitter-x text-2xl text-[#F5F4F4]" />
        <NavbarItem icon="bi bi-discord text-2xl text-[#F5F4F4]" />
      </ul>
    </div>
  );
}

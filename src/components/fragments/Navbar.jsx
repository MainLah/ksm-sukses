import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavbarItem from "./NavbarItem";
import Button from "./Button";

export default function Navbar() {
  function handleLogOut() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  return (
    <nav className="flex flex-row justify-between items-center">
      <div className="logo m-5">
        <Logo />
      </div>
      <SearchBar />
      <ul className="flex flex-row w-2/5 justify-evenly">
        <NavbarItem navRef="catalog" icon="bi bi-house-door">
          Catalog
        </NavbarItem>
        <NavbarItem navRef="wishlist" icon="bi bi-bag">
          Wishlist
        </NavbarItem>
        <NavbarItem navRef="account" icon="bi bi-person">
          Account
        </NavbarItem>
        <Button
          buttonText="Sign Out"
          className="bg-white py-1 px-3 border-[1px] border-slate-300"
          onClick={handleLogOut}
        />
      </ul>
    </nav>
  );
}

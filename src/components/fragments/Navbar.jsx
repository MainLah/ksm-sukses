import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center">
      <div className="logo m-5">
        <Logo />
      </div>
      <SearchBar />
      <ul className="flex flex-row w-1/5 justify-evenly">
        <NavbarItem itemName="catalog">Catalog</NavbarItem>
        <NavbarItem itemName="wishlist">Wishlist</NavbarItem>
        <NavbarItem itemName="account">Account</NavbarItem>
      </ul>
    </nav>
  );
}

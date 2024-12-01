import { React, useState, useEffect } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavbarItem from "./NavbarItem";
import Button from "./Button";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(true);

  function handleLogOut() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  function handleClick() {
    if (open) {
      setDropdown(true);
      setOpen(false);
    } else {
      setDropdown(false);
      setOpen(true);
    }
  }

  function styleList() {
    if (isMobile) {
      if (dropdown) {
        return {
          height: "24rem",
          flexDirection: "column",
          justifyContent: "start",
        };
      } else {
        return {
          height: "0",
          flexDirection: "column",
          justifyContent: "start",
        };
      }
    } else {
      return { flexDirection: "row", justifyContent: "space-evenly" };
    }
  }

  useEffect(() => {
    window.screen.width < 500 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <nav
      className={"flex justify-between items-center"}
      style={isMobile ? { flexDirection: "column" } : { flexDirection: "row" }}
    >
      <div className="logo m-5">
        <Logo />
      </div>
      {isMobile && (
        <Button onClick={handleClick} className="bg-white py-1 px-3">
          <i className="bi bi-list text-4xl px-5"></i>
        </Button>
      )}
      {!isMobile && (
        <>
          <SearchBar />
          <ul
            className={"flex w-2/5 transition duration-150 ease-in-out"}
            style={styleList()}
          >
            <NavbarItem navRef="catalog" icon="bi bi-house-door">
              Catalog
            </NavbarItem>
            <NavbarItem navRef="wishlist" icon="bi bi-bag">
              Wishlist
            </NavbarItem>
            <NavbarItem navRef="profile" icon="bi bi-person">
              Account
            </NavbarItem>
            <Button
              buttonText="Sign Out"
              className="bg-white py-1 px-3 border border-slate-300"
              onClick={handleLogOut}
            />
          </ul>
        </>
      )}
    </nav>
  );
}

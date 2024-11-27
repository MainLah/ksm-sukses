import React from "react";
import LogoContactFooter from "./LogoContactFooter";
import ContactInformation from "./ContactInformation";
import QuoteFooter from "./QuoteFooter";

export default function Footer() {
  return (
    <nav className="flex flex-col items-center w-full bg-[#3E3E3E] py-12">
      <div className="flex flex-row justify-between w-10/12">
        <LogoContactFooter></LogoContactFooter>
        <ContactInformation></ContactInformation>
        <QuoteFooter></QuoteFooter>
      </div>
      <hr className="w-10/12 mt-10" />
      <p className="w-10/12 text-right text-[#F5F4F4] mt-3">
        2024 Sneaker Scout Inc. All rights reserved
      </p>
    </nav>
  );
}

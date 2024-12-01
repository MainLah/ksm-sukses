import React from "react";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import Button from "../components/fragments/Button";
import ProductGrid from "../components/fragments/ProductGrid";

export default function AccountPage() {
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <p className="text-4xl font-medium mb-10">PROFILE</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col justify-center items-center max-w-72 bg-[#8EB1C7] px-12 py-16 border-y border-l rounded-l-lg">
            <p className="w-full text-left text-4xl font-medium">
              Personal Information
            </p>
            <p className="w-full text-left font-light">
              Only display name will be visible by other users.
            </p>
          </div>
          <div className="flex flex-col justify-evenly w-4/6 border-y border-r rounded-r-lg pl-5">
            <p>
              <span className="font-light">Display Name</span>
              <br />
              Rusdi
            </p>
            <p>
              <span className="font-light">Username</span>
              <br />
              rusdijomok123
            </p>
            <div>
              <p>
                <span className="font-light">Email</span>
                <br />
                <div className="flex justify-between">
                  <div>
                    <span>*****************@gmail.com</span>
                    <span className="text-[12px] pl-1 text-sky-600">
                      Reveal
                    </span>
                  </div>
                  <Button
                    buttonText="Edit"
                    className="bg-[#EB4511] w-24 h-10 mr-5 rounded-lg text-white font-light"
                  ></Button>
                </div>
              </p>
            </div>
          </div>
        </div>
        <hr className="my-5 w-full border w-5/6" />
        <div className="flex flex-col justify-center w-5/6">
          <p className="text-3xl my-5">Wishlisted Items</p>
          <ProductGrid
            numberOfProducts={4}
            numberOfCols={4}
            marginx="0"
          ></ProductGrid>
        </div>
      </div>
      <Footer />
    </div>
  );
}

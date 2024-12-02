import React from "react";

export default function ReceiveNews() {
  return (
    <div className="flex flex-row mt-5 mb-2">
      <div>
        <input type="checkbox" name="receive-news" className="mr-2" />
      </div>
      <div>
        <label htmlFor="receive-news">
          Sign up to receive SneakerScout email newsletter <br /> with special
          promotions, news and more.
        </label>
      </div>
    </div>
  );
}

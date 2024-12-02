import React from "react";
import { Link } from "react-router-dom";

export default function BottomPageButtons(props) {
  const { bottomPageText, bottomPageButtonText, linkTo } = props;

  return (
    <div className="bottomPageButtons">
      <p className="text-center text-[#898989] font-medium">
        {bottomPageText}{" "}
        <span className="text-black">
          <Link to={linkTo}>{bottomPageButtonText}</Link>
        </span>
      </p>
    </div>
  );
}

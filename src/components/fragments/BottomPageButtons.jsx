import React from "react";
import { Link } from "react-router-dom";

export default function BottomPageButtons(props) {
  const { bottomPageText, bottomPageButtonText, linkTo } = props;

  return (
    <div className="bottomPageButtons">
      <p>
        {bottomPageText} <Link to={linkTo}>{bottomPageButtonText}</Link>
      </p>
    </div>
  );
}

import React from "react";
import notFoundImg from "../../images/pnf.jpg";
import "./PageNotFound.scss";

export default function PageNotFound() {
  return (
    <div className="notFoundImgage">
      <img src={notFoundImg} alt="NotFound Img" />
    </div>
  );
}

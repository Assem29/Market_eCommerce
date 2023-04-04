import React from "react";
import CommonSection from "../UI/CommonSection";

const Helmet = (props) => {
  document.title = "AssemMarket - " + props.title;
  return (
    <>
      <CommonSection title={props.title} />
      {props.children}
    </>
  );
};

export default Helmet;

import React from "react";

function SectionHeading({ title, className, style }) {
  return (
    <h1 className={className} style={style}>
      {title}
    </h1>
  );
}

export default SectionHeading;

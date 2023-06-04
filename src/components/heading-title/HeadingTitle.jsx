import React from "react";
import './heading-title.css'

export default function HeadingTitle({heading}) {
  return (
    <div className="heading-title">
      <h2 id="heading-value">{heading}</h2>
    </div>
  );
}

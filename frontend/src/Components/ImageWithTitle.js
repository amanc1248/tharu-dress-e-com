import React from "react";

function ImageWithTitle({ theTitle }) {
  return (
    <div className="employee__and__tailor__register">
      <div
        className="theBackgroundImage"
        style={{
          backgroundImage: `url("/images/croped.jpg")`,
        }}
      >
        <div className="faq__title">{theTitle}</div>
      </div>
    </div>
  );
}

export default ImageWithTitle;

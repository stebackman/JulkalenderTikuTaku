import React from "react";
import "./Hatch.css";

function Hatch({ index, video, isOpen, openHatch, backgroundImage }) {
  const handleOpen = () => openHatch(index);

  return (
    <div
      className="hatch"
      style={{
        backgroundImage: isOpen ? "none" : `url(${backgroundImage})`,
      }}
      onClick={handleOpen} // For mouse users
      onTouchStart={handleOpen} // For touch devices
    >
      {isOpen && (
        <iframe
          src={video}
          title={`Day ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      {!isOpen && <div className="hatch-number">{index + 1}</div>}
    </div>
  );
}

export default Hatch;

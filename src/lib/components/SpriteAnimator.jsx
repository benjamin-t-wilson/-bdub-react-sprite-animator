import React, { useState, useEffect, useRef } from "react";

const SpriteAnimator = ({ sheet, columns, fps = 16, play = true }) => {
  const imgRef = useRef(null);
  const [imgDimensions, setImgDimensions] = useState({ height: 0, width: 0 });
  const [spriteIndex, setSpriteIndex] = useState(0);

  useEffect(() => {
    if (imgRef.current && imgDimensions.height == 0) {
      const newDims = {};
      newDims.height = imgRef.current.naturalHeight;
      newDims.width = imgRef.current.naturalWidth;
      setImgDimensions((_) => newDims);
    }
  }, [imgRef, imgDimensions]);

  useEffect(() => {
    if (play) {
      if (spriteIndex < columns - 1) {
        setTimeout(() => {
          setSpriteIndex((prev) => prev + 1);
        }, 1000 / fps);
      } else {
        setTimeout(() => {
          setSpriteIndex(0);
        }, 1000 / fps);
      }
    } else if (!play && spriteIndex > 0) {
      setSpriteIndex(0);
    }
  }, [spriteIndex]);

  return (
    <section
      className="sprite-animator"
      style={{
        width: imgDimensions.width / columns,
        height: imgDimensions.height,
        overflow: "hidden",
      }}
    >
      <img
        ref={imgRef}
        src={sheet}
        style={{
          position: "relative",
          right: (spriteIndex * imgDimensions.width) / columns,
        }}
      />
    </section>
  );
};

export default SpriteAnimator;

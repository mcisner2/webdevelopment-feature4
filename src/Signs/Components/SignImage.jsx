// Citations
// 1: Used developer mozilla to explain ImageData, its purpose and parameters,
// and how to use with the signData.json we have
// Link: https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data
// 2: Used developer mozilla to help understand .getContext tool in js and
// how to use it to generate our ASL images
// Link: https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data

import React, { useEffect, useRef } from "react";

// create function to take in pixels and letter label to
// generate a 28 pixel image
export function SignImage({
  pixels,
  letter,
  showCaption = true,
}) {
  // empty box
  const canvasRef = useRef(null);

  // have useEffect wait until the page is ready
  useEffect(() => {
    // make sure canvas exists and pixels were provided
    if (!canvasRef.current || !pixels) return;

    // set up the image context and loop through each rgba
    // pixel to fill into the sheet
    const ctx = canvasRef.current.getContext("2d");

    const imageData = ctx.createImageData(28, 28);

    pixels.forEach((value, i) => {
      imageData.data[i * 4] = value;
      imageData.data[i * 4 + 1] = value;
      imageData.data[i * 4 + 2] = value;
      imageData.data[i * 4 + 3] = 255;
    });

    ctx.putImageData(imageData, 0, 0);
  }, [pixels]);

  // render image in jsx, caption renders when
  // showCaption is true
  return (
    <figure>
      <canvas
        ref={canvasRef}
        width={28}
        height={28}
        role="img"
        aria-label={`Hand sign for the letter ${letter}`}
        style={{ width: "90px" }}
      />
      {showCaption && (
        <figcaption>{letter}</figcaption>
      )}
    </figure>
  );
}
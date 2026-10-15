// Citations
// 1: Used developer mozilla to explain ImageData, its purpose and parameters,
// and how to use with the signData.json we have
// Link: https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data
// 2: Used developer mozilla to help understand .getContext tool in js and
// how to use it to generate our ASL images
// Link: https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data

import {
   html,
   useEffect,
   useRef,
} from "https://unpkg.com/htm/preact/standalone.module.js";

// create function to take in pixles and letter label to 
// generate a 28 pixel image
export function signImage({ pixels, letter, showCaption = true }) {
    // empty box
    const canvasRef = useRef(null);

    // have useEffect wait until the page is ready
    useEffect(() => {
        // set up the image context and loop through each rbga 
        // pixel to fill into the sheet
        const imageContext = canvasRef.current.getContext("2d");

        const currImage = imageContext.createImageData(28, 28);

        pixels.forEach((value, i) => {
            currImage.data[i * 4] = value;
            currImage.data[i * 4 + 1] = value;
            currImage.data[i * 4 + 2] = value;
            currImage.data[i * 4 + 3] = 255;
        });

        imageContext.putImageData(currImage, 0, 0);
    }, [pixels]);

    // render image in html, caption renders when showCaption is true
    return html`
    <figure>
        <canvas
            ref=${canvasRef}
            width="28"
            height="28"
            role="img"
            aria-label=${`Hand sign for the letter ${letter}`}
            style="width: 90px;">
        </canvas>
        ${showCaption ? html`<figcaption>${letter}</figcaption>` : null}
    </figure>
`;
}




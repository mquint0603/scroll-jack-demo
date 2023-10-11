/** @jsxImportSource @emotion/react */
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { css } from "@emotion/react";

const baseStyles = css`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  img {
    height: 100%;
    width: auto;
    min-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

function ImageBackground({ imgId }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "mquint63",
    },
  });

  const image = cld.image(imgId);
  return (
    <div className="image-wrapper" css={baseStyles}>
      <AdvancedImage cldImg={image} />
    </div>
  );
}

export default ImageBackground;

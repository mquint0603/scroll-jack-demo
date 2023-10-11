/** @jsxImportSource @emotion/react */
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import { fadeIn, fadeOut } from "@cloudinary/url-gen/actions/effect";
import { fill } from "@cloudinary/url-gen/actions/resize";

import styles from "./styles";

const cld = new Cloudinary({
  cloud: {
    cloudName: "mquint63",
  },
});

export default function VideoBackground({
  vidId,
  loop = true,
  fadeInOut = false,
  height = null,
  width = null,
  customStyles = {},
}) {
  const video = cld.video(vidId);

  video.resize(
    fill()
      .width(width || 1920)
      .height(height || 1080)
  );
  if (fadeInOut) {
    video.effect(fadeIn().duration(2000)).effect(fadeOut().duration(2000));
  }
  return (
    <div className="video-bg" css={[styles, customStyles]}>
      <AdvancedVideo cldVid={video} playsInline loop={loop} muted autoPlay />
    </div>
  );
}

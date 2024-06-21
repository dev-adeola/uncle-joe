import React from "react";

async function VideoEmbedded() {
  return (
    <>
      <div>
        <iframe
          src="https://player.vimeo.com/video/885665254?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="Introduction To Ratefy"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
}

export default VideoEmbedded;

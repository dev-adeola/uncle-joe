"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";

export default function AudioPlayerWithWave({
  isPlaying,
  setIsPlaying,
  audioFile,
  containerId,
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const wavesurferRef = useRef();

  const handleWSMount = useCallback((waveSurfer) => {
    wavesurferRef.current = waveSurfer;

    // const audioFile = "/audio.mp3";

    if (wavesurferRef.current) {
      wavesurferRef.current.load(audioFile);

      wavesurferRef.current.on("ready", () => {
        console.log("WaveSurfer is ready");
        setIsLoaded(true);
      });

      wavesurferRef.current.on("loading", (data) => {
        console.log("loading --> ", data);
      });

      if (window) {
        window.surferidze = wavesurferRef.current;
      }
    }
  }, []);

  useEffect(() => {
    if (isPlaying) wavesurferRef.current.play();
    else wavesurferRef.current.pause();
  }, [isPlaying]);

  return (
    <div className="w-full">
      <WaveSurfer
        onMount={handleWSMount}
        cursorColor="transparent"
        container={"#" + containerId}
        waveColor={"#00B172"}
        progressColor={"#3e9f4d"}
        barWidth={2}
        barGap={4}
        barRadius={2}
        height={35}
        width={"100%"}
      >
        <WaveForm id={containerId} />
      </WaveSurfer>
    </div>
  );
}

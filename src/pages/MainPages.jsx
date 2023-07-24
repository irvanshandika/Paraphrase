// src/MainPage.js
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const MainPages = () => {
  return (
    <div className="mt-20">
      <Player autoplay loop src="https://lottie.host/0dde184f-13c3-4132-a019-86cca0ad5c33/HxOHzP0aX0.json" className="lg:w-[500px]">
        <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
      </Player>
    </div>
  );
};

export default MainPages;

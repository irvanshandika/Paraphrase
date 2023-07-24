// src/MainPage.js
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import NavigasiBar from "../components/navbar";

const MainPages = () => {
  return (
    <div>
      <NavigasiBar />
      <div className="mt-8">
        <Player autoplay loop src="https://lottie.host/0dde184f-13c3-4132-a019-86cca0ad5c33/HxOHzP0aX0.json" backgroundMode="transparent" className="lg:w-[500px]">
          <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
        </Player>
      </div>
    </div>
  );
};

export default MainPages;

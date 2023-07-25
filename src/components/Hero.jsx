import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function Hero() {
  return (
    <>
      <section className="mt-10">
        <div className="container mx-auto px-5 py-5">
          <div className="py-1 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h1 className="mb-4 text-4xl font-normal tracking-tight leading-none text-gray-900 dark:text-white md:text-5xl lg:text-6xl lg:text-left">
                Selamat Datang Di
                <span className="before:block before:absolute before:-inset-3 before:mt-4 before:-skew-y-3 before:bg-[#00D7FF] relative inline-block my-3 lg:my-3">
                  <span className="relative text-white">Paraphrases</span>
                </span>
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 dark:text-white lg:text-xl lg:text-left">
                Platform inovatif yang membawa pengalaman merangkai teks ke level berikutnya! Kami percaya bahwa kata-kata memiliki kekuatan besar untuk menyampaikan pesan yang mendalam dan menginspirasi. Oleh karena itu, kami hadir dengan
                solusi canggih untuk membantu Anda mengubah tulisan-tulisan biasa menjadi karya yang lebih menarik dan orisinal.
              </p>
            </div>
            <div className="order-1 lg:order-2 lg:w-[700px] w-[280px] lg:mx-auto mx-auto">
              <Player style={{ width: "100%", height: "100%" }} autoplay loop src="https://lottie.host/69115990-9f45-4722-be9e-7bb0995e7938/Hl1PQO6hCu.json" background="transparent">
                <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
              </Player>
            </div>
          </div>
          <div className="flex justify-center">
            <Player style={{ width: "100%", height: "100%" }} autoplay loop src="https://lottie.host/bd3f43e7-7a30-4176-898e-edd44a180779/YW61IM6dQ1.json" background="transparent">
              <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
            </Player>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

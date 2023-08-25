import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function Pricing() {
  return (
    <section id="pricing">
      <div className="container mx-auto px-5 py-5">
        <div className="py-1 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h1 className="mb-4 text-4xl font-normal tracking-tight leading-none text-gray-900 dark:text-white md:text-5xl lg:text-6xl lg:text-left font-plus-jakarta">Apakah Berbayar?</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 dark:text-white lg:text-xl lg:text-left font-plus-jakarta">
              Tentu saja tidak. Karena <span className="text-indigo-500 uppercase">Paraphrases</span> dibuat untuk membantu teman-teman untuk menghindari dari yang namanya <span className="text-red-500 uppercase">Plagiarisme</span>.
              Karena <span className="text-red-500 uppercase">Plagiarisme</span> merupakan tindakan yang tidak menjunjung nilai kejujuran.
            </p>
          </div>
          <div className="order-1 lg:order-2 lg:w-[700px] w-[280px] lg:mx-auto flex justify-center">
            <Player className="lg:h-[400px] lg:w-[700px] w-[400px]" autoplay loop src="https://lottie.host/5b61ec2c-6a65-468b-80c1-e3ea14f6de69/3ERRSJaceC.json" background="transparent">
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
  );
}

export default Pricing;

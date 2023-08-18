import React, { useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";

function SecondHero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="mt-10">
        <div className="container mx-auto px-5 py-5">
          <div className="py-1 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col justify-center order-2 lg:order-2">
              <h1 className="mb-4 text-4xl font-normal tracking-tight leading-none text-gray-900 dark:text-white md:text-5xl lg:text-6xl lg:text-left">Solusi Penghapusan Plagiarisme Online Secara Gratis</h1>
              <p className="mb-8 text-lg font-normal text-gray-500 dark:text-white lg:text-xl lg:text-left">
                Sederhanakan proses penulisan dengan fitur paraphrase otomatis kami, yang mampu menghasilkan variasi kalimat dengan cepat dan akurat. Jangan khawatir tentang plagiarisme, karena Paraphrase telah dirancang dengan fokus pada
                integritas akademis dan kreativitas.
              </p>
            </div>
            <div className="order-1 lg:order-1 lg:w-[400px] w-[280px] flex justify-center">
              <Player className="lg:h-[300px] lg:w-[700px] w-[350px]" autoplay loop src="https://lottie.host/2b2381bf-c8bb-40d8-b975-5d565435ec0e/RJkjiRv6Il.json" background="transparent">
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

export default SecondHero;

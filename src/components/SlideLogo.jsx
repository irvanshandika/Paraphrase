import React from "react";
import Tailwindcss from "../Logo/tailwindcss";
import ReactJS from "../Logo/ReactJS";
import GoogleFont from "../Logo/GoogleFont";
import FireBase from "../Logo/FireBase";
import LottieLogo from "../Logo/LottieLogo";
import CloudinaryLogo from "../Logo/CloudinaryLogo";
function Slide() {
  return (
    <>
      <section className="mt-4">
        <h1 className="text-center lg:text-4xl text-4xl dark:text-white">Thanks To:</h1>
        <div className="flex justify-center items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-6 py-2">
              <div className="flex items-center justify-center p-6 col-span-1 md:col-span-2 lg:col-span-1">
                <Tailwindcss />
              </div>
              <div className="flex items-center justify-center p-6 col-span-1 md:col-span-2 lg:col-span-1">
                <ReactJS /> <h1 className="text-center lg:text-2xl ml-2 font-bold font-plus-jakarta dark:text-white">React JS</h1>
              </div>
              <div className="flex items-center justify-center p-6 col-span-1 md:col-span-2 lg:col-span-1">
                <GoogleFont />
              </div>
              <div className="flex items-center justify-center p-6 col-span-1 md:col-span-2 lg:col-span-1">
                <FireBase />
              </div>
              <div className="flex items-center justify-center p-6 col-span-1 md:col-span-2 lg:col-span-1">
                <LottieLogo />
              </div>
              <div className="flex items-center justify-center p-6 col-span-1 md:col-span-2 lg:col-span-1">
                <CloudinaryLogo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slide;

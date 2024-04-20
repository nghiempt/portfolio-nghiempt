"use client";

import React from "react";

export default function HomePage() {

  return (
    <div className="w-full flex flex-col justify-center items-center pt-20">

      <div className="w-full lg:w-2/4 flex flex-col justify-center items-center">

        <div className="hidden w-full lg:flex flex-row justify-between items-center">
          <div className="">
            <h1 className="text-xl font-bold cursor-pointer">Home</h1>
          </div>
          <div className="flex justify-center items-center gap-10">
            <h1 className="text-xl font-bold cursor-pointer">About</h1>
            <h1 className="text-xl font-bold cursor-pointer">Portfolio</h1>
            <h1 className="text-xl font-bold cursor-pointer">Blog</h1>
            <h1 className="text-xl font-bold cursor-pointer">Profile</h1>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:mt-20 px-6 lg:px-0">
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="text-xl">Hi there, I'm Nghiem Thanh Pham</h1>
            <h1 className="text-3xl font-bold">Software Engineer</h1>
            <h1 className="text-lg">I specializes in creating beautiful website, captivating langding page, and user-friendly mobile apps</h1>
            <div className="flex justify-center items-center gap-10 mt-6">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968705.png" alt="img" width={40} height={40} />
              <img src="https://cdn-icons-png.flaticon.com/128/174/174857.png" alt="img" width={40} height={40} />
              <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="img" width={40} height={40} />
              <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="img" width={40} height={40} />
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="img" width={40} height={40} />
            </div>
            <div className="flex justify-center items-center gap-4 mt-6">
              <button className="bg-[rgb(39,59,96)] text-white text-lg px-6 py-3 rounded-lg shadow-inner drop-shadow-lg font-bold">Contact Me</button>
              <button className="bg-white px-6 py-3 text-lg rounded-lg shadow-inner drop-shadow-lg font-bold">View Works</button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <video className="h-full w-full rounded-lg" autoPlay muted loop>
              <source src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/software-engineer-launching-code-6369144-5304700.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

    </div>
  );
}

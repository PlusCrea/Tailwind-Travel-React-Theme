import React from "react";

export default function RegisterBanner() {
  return (
    <>
      <div
        className="bg-cover bg-center    h-[500px] w-full mt-5 text-center  rounded-[100px]  "
        style={{ backgroundImage: "url(./img/spaceback.jpg)" }}
      >
        <div className="h-full w-full bg-blue/20 rounded-[100px] flex flex-col justify-evenly">
          <div className="w-3/4 mx-auto">
            <h1 className="md:text-6xl text-4xl font-semibold leading-normal">
              Don’t Miss The 50% Discount if You register Today
            </h1>
          </div>
          <div>
            <button className="text-blue bg-white rounded-3xl px-16 py-8 font-semibold text-xl">
              Register Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

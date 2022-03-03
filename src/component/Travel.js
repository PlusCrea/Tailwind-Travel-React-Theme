import React from "react";

export default function Travel() {
  return (
    <>
      <div className="flex py-12">
        <div className="lg:basis-5/12 relative ">
          <div className="bg-white rounded-3xl  p-6 text-center w-44 shadow-xl shadow-gray/10 absolute top-10 right-0 invisible lg:visible">
            <div className="text-blue text-4xl font-semibold">300+</div>
            <div className="text-black text-xl">DESTINATIONS</div>
          </div>

          <div className="bg-white rounded-3xl  p-6 text-center w-44 shadow-xl shadow-gray/10 absolute bottom-28 right-0 invisible lg:visible">
            <div className="text-blue text-4xl font-semibold">150+</div>
            <div className="text-black text-xl">HOTELS</div>
          </div>
          <div className="bg-white rounded-3xl  p-6 text-center w-44 shadow-xl shadow-gray/10 absolute top-56 -left-20 invisible lg:visible">
            <div className="text-blue text-4xl font-semibold">5000+</div>
            <div className="text-black text-xl">TOURISTS</div>
          </div>
          <img
            className="h-full w-5/6 rounded-3xl object-cover invisible lg:visible"
            src="./img/travel.jpg"
          ></img>
        </div>
        <div className="lg:basis-7/12 flex flex-col items-left  place-content-center justify-center   py-12 px-4 ">
          <h3 className="text-black md:text-6xl text-4xl font-semibold leading-snug">
            Travel Any Corner of The World With Us
          </h3>
          <p className="text-gray md:text-2xl text-xl md:leading-10 leading-8 mt-6">
            Would you explore nature paradise in the world, let’s find the best
            destination in world with us, Would you explore nature paradise in
            the world, let’s find the best destination in world with us. Would
            you explore nature paradise in the world, let’s find the best
            destination in world with us. <br />
            <br />
            Would you explore nature paradise in the world, let’s find the best
            destination in world with us.
          </p>
          <div className="mt-6">
            <button className="bg-blue text-white p-6 rounded-xl text-xl shadow-xl shadow-blue/25">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

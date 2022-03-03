import React from "react";

export default function Offer() {
  return (
    <>
      <div className="text-center  text-black">
        <h1 className="text-black text-6xl my-16 font-semibold">
          Special Upcoming Offers
        </h1>
        <div className="text-black h-16 p-4 bg-white inline shadow-md rounded-lg mx-auto my-4">
          <button className="h-11 px-6 mx-2 bg-blue rounded-lg text-white text-xl">
            Team
          </button>
          <button className="h-11 px-6  rounded-lg  text-xl ">Couple</button>
          <button className="h-11 px-6  rounded-lg text-xl ">Family</button>
        </div>
        <div className="flex flex-col p-6 justify-between lg:flex-row gap-8 ">
          <div className="p-5 rounded-3xl  shadow-md bg-white w-full">
            <div className="flex flex-row w-full relative">
              <div className="basis-11/12">
                <img
                  className="rounded-3xl  w-80 h-64 object-cover"
                  src="./img/offer1.jpg"
                ></img>
              </div>

              <div className="absolute rotate-90 w-52 h-10  text-black/50 text-xl font-normal leading-8 text-center  top-28 -right-24 tracking-widest">
                14 FEB 2022
              </div>
            </div>
            <div className="flex my-4">
              <div className="text-fuschia/90 bg-fuschia/50 rounded-2xl px-4 py-1 font-semibold text-sm">
                Relax
              </div>
              <div className="text-gray ml-4">3 Days, 3 Nights</div>
            </div>
            <h3 className="text-black text-left font-semibold text-2xl">
              Loga Sea
            </h3>
            <div className="flex justify-between mt-4 ">
              <div className="text-black text-2xl font-semibold">
                700$ <span className="text-gray text-xl">/Person</span>
              </div>
              <div className="">
                <button className="text-blue bg-lightblue p-4 font-semibold text-sm rounded-md">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-3xl shadow-md bg-white w-full">
            <div className="flex flex-row w-full relative">
              <div className="basis-11/12">
                <img
                  className="rounded-3xl  w-80 h-64 object-cover"
                  src="./img/offer2.jpg"
                ></img>
              </div>

              <div className="absolute rotate-90 w-52 h-10  text-black/50 text-xl font-normal leading-8 text-center  top-28 -right-24 tracking-widest">
                18 JUN 2022
              </div>
            </div>
            <div className="flex my-4">
              <div className="text-iris/80 bg-indigo rounded-2xl px-4 py-1 font-semibold text-sm">
                Adventure
              </div>
              <div className="text-gray ml-4">4 Days, 3 Nights</div>
            </div>
            <h3 className="text-black text-left font-semibold text-2xl">
              Ansgar Scheffold
            </h3>
            <div className="flex justify-between mt-4 ">
              <div className="text-black text-2xl font-semibold">
                400$ <span className="text-gray text-xl">/Person</span>
              </div>
              <div className="">
                <button className="text-blue bg-lightblue p-4 font-semibold text-sm rounded-md">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-3xl shadow-md bg-white w-full">
            <div className="flex flex-row w-full relative">
              <div className="basis-11/12">
                <img
                  className="rounded-3xl  w-80 h-64 object-cover"
                  src="./img/offer3.jpg"
                ></img>
              </div>

              <div className="absolute rotate-90 w-52 h-10  text-black/50 text-xl font-normal leading-8 text-center  top-28 -right-24 tracking-widest">
                22 DEC 20222
              </div>
            </div>
            <div className="flex my-4">
              <div className="text-fuschia/90 bg-fuschia/50 rounded-2xl px-4 py-1 font-semibold text-sm">
                Relax
              </div>
              <div className="text-gray ml-4">7 Days, 6 Nights</div>
            </div>
            <h3 className="text-black text-left font-semibold text-2xl">
              Lona X
            </h3>
            <div className="flex justify-between mt-4 ">
              <div className="text-black text-2xl font-semibold">
                340$ <span className="text-gray text-xl">/Person</span>
              </div>
              <div className="">
                <button className="text-blue bg-lightblue p-4 font-semibold text-sm rounded-md">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

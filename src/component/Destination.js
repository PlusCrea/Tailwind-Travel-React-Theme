import React from "react";

export default function Destination() {
  return (
    <>
      <div className="flex flex-col items-center  place-content-center justify-evenly py-12">
        <h3 className="text-black text-4xl my-6 font-semibold">
          Recommended Destination
        </h3>
        <div>
          <div className="py-6 ">
            <button className="h-11 px-6 mx-2 bg-white shadow-sm rounded-lg text-blue text-xl font-semibold mr-5">
              Popular
            </button>
            <button className="h-11 px-6 mx-2  rounded-lg text-gray text-xl font-semibold mr-5">
              Adventure
            </button>
            <button className="h-11 px-6 mx-2  rounded-lg text-gray text-xl font-semibold mr-5">
              Beath
            </button>
          </div>
        </div>
        <div className="flex w-full justify-between my-12 flex-col lg:flex-row gap-4">
          <div className=" rounded-2xl shadow-xl shadow-gray-600 p-3 bg-white ">
            <div className="relative ">
              <div className="absolute right-4 top-4 bg-white/30 rounded-3xl  w-14  flex px-1 justify-around items-center  place-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="yellow"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                3.4
              </div>
            </div>
            <img
              className="rounded-3xl h-52 object-cover w-full lg:w-72"
              src="./img/dest1.jpg"
            ></img>
            <div className="px-5 pt-5">
              <div className="text-xl font-semibold text-black">
                Kina Mountain
              </div>
              <div className="flex space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#F178B6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-gray font-semibold">Cambodia</div>
              </div>
            </div>
          </div>
          <div className=" rounded-2xl shadow-xl shadow-gray-600 p-3 bg-white">
            <div className="relative ">
              <div className="absolute right-4 top-4 bg-white/30 rounded-3xl  w-14  flex px-1 justify-around items-center  place-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="yellow"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.5
              </div>
            </div>
            <img
              className="rounded-3xl h-52 object-cover w-full lg:w-72"
              src="./img/dest2.jpg"
            ></img>
            <div className="px-5 pt-5">
              <div className="text-xl font-semibold text-black">
                Kina Mountain
              </div>
              <div className="flex space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#F178B6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-gray font-semibold">Cambodia</div>
              </div>
            </div>
          </div>
          <div className=" rounded-2xl shadow-xl shadow-gray-600 p-3 bg-white">
            <div className="relative ">
              <div className="absolute right-4 top-4 bg-white/30 rounded-3xl  w-14  flex px-1 justify-around items-center  place-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="yellow"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.2
              </div>
            </div>
            <img
              className="rounded-3xl h-52 object-cover w-full lg:w-72"
              src="./img/dest3.jpg"
            ></img>
            <div className="px-5 pt-5">
              <div className="text-xl font-semibold text-black">
                Kina Mountain
              </div>
              <div className="flex space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#F178B6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-gray font-semibold">Cambodia</div>
              </div>
            </div>
          </div>
          <div className=" rounded-2xl shadow-xl shadow-gray-600 p-3 bg-white">
            <div className="relative ">
              <div className="absolute right-4 top-4 bg-white/30 rounded-3xl  w-14  flex px-1 justify-around items-center  place-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="yellow"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                3.5
              </div>
            </div>
            <img
              className="rounded-3xl h-52 object-cover w-full lg:w-72"
              src="./img/dest4.jpg"
            ></img>
            <div className="px-5 pt-5">
              <div className="text-xl font-semibold text-black">
                Kina Mountain
              </div>
              <div className="flex space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#F178B6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-gray font-semibold">Cambodia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

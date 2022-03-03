import React from "react";

export default function Testimonials() {
  const lessthan = String.fromCodePoint(60);
  const greaterthan = String.fromCodePoint(62);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-10 mt-44">
        <div className="relative  rounded-3xl bg-white  text-center flex flex-col justify-around gap-8 p-10 items-center z-10 w-full">
          <div
            className="relative bg-local bg-no-repeat bg-top  w-full"
            style={{ backgroundImage: "url(./img/virgul.png)" }}
          >
            <p className="text-black  bottom-0 font-semibold text-xl mt-10 leading-9 ">
              Our trip to Morocco was truly a onece in a lifetime experience and
              we are so grateful to everyone that made it happen seamlessly. Our
              travel planner, Jaouad, was increadible.
            </p>
          </div>
          <h3 className="text-blue font-semibold text-xl">-Vand D</h3>
          <h4 className="text-gray/80 font-semibold text-xl mb-12 z-10">
            Happy Treloo
          </h4>
          <div className="absolute bottom-8 ml-20 bg-white text-black font-medium text-sm rounded-3xl  w-12  flex px-1 justify-around items-center  place-content-center z-20">
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

          <div className="absolute  -bottom-10 rounded-full border-0 border-black w-48 h-48 z-5  bg-white"></div>
          <div className="absolute  -bottom-10">
            <img src="./img/testimon1.png"></img>
          </div>
        </div>
        <div className="relative  rounded-3xl bg-white  text-center flex flex-col justify-around gap-8 p-10 items-center z-10 w-full">
          <div
            className="relative bg-local bg-no-repeat bg-top  w-full"
            style={{ backgroundImage: "url(./img/virgul.png)" }}
          >
            <p className="text-black bottom-0 font-semibold text-xl leading-9 mt-10">
              Our trip to Morocco was truly a onece in a lifetime experience and
              we are so grateful to everyone that made it happen seamlessly. Our
              travel planner, Jaouad, was increadible.
            </p>
          </div>
          <h3 className="text-blue font-semibold text-xl">-Vand D</h3>
          <h4 className="text-gray/80 font-semibold text-xl mb-12 z-10">
            Happy Treloo
          </h4>
          <div className="absolute bottom-8 ml-20 bg-white text-black font-medium text-sm rounded-3xl  w-12  flex px-1 justify-around items-center  place-content-center z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="yellow"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4.9
          </div>

          <div className="absolute  -bottom-10 rounded-full border-0 border-black w-48 h-48 z-5  bg-white"></div>
          <div className="absolute  -bottom-10">
            <img src="./img/testimon2.png"></img>
          </div>
        </div>
      </div>
      <div className="text-center mt-14">
        <button className="rounded-xl text-4xl  border-2 border-blue/50 px-2 text-blue/50 mr-5 ">
          {lessthan}
        </button>
        <button className="rounded-xl text-4xl  border-2 border-blue/50 px-2 text-blue/50">
          {greaterthan}
        </button>
      </div>
    </>
  );
}

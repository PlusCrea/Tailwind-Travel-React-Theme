import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Dialog } from "@headlessui/react";

export default function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 7
    )
  );
  const [isOpen, setIsOpen] = useState(false);

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  console.log(startDate.toLocaleDateString("en-us", options).substring(0, 3));
  console.log(endDate);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(startDate, endDate);
  }

  return (
    <>
      <div className="w-1/4 h-24 text-black rounded-t-3xl  p-2 flex text-2xl bg-white -mt-32 md:flex-row flex-col gap-y-2">
        <button className="bg-blue/20 rounded-2xl w-28 h-16 flex items-center place-content-center font-medium">
          <img className="-rotate-45" src="./img/airplane.svg"></img>
          Flight
        </button>
        <button className="w-28 h-16 flex items-center place-content-center font-medium">
          <img className="mr-1" src="./img/hotel.svg"></img>Hotel
        </button>
      </div>
      <div className="rounded-b-3xl rounded-tr-3xl bg-white">
        <div className="flex justify-around items-center px-5 py-10 md:flex-row flex-col gap-y-3">
          <div className="w-full md:w-4/12 rounded-3xl border-2 border-lightgray/50 h-24 px-5 py-20 flex justify-between items-center">
            <div>
              <div className="text-gray text-xl">Living From</div>
              <div className="text-black text-2xl font-semibold">Dubai</div>
            </div>
            <div>
              <img
                className="border border-gray rounded-full border-dashed p-1"
                src="./img/grayairplane.svg"
              ></img>
            </div>
            <div>
              <div className="text-gray text-xl">Going To</div>
              <div className="text-black text-2xl font-semibold">New York</div>
            </div>
          </div>
          <div
            className="w-full md:w-5/12 rounded-3xl border-2 border-lightgray/50 h-24 px-5 py-20 flex justify-between items-center"
            onClick={() => setIsOpen(true)}
          >
            <div>
              <div className="text-gray text-xl flex">
                Leave <img className="ml-4" src="./img/airplane.svg"></img>
              </div>
              <div className="text-black text-2xl font-semibold">
                {startDate
                  .toLocaleDateString("en-us", options)
                  .substring(8, 10)}{" "}
                {startDate.toLocaleDateString("en-us", options).substring(4, 8)}
                ,
                {startDate.toLocaleDateString("en-us", options).substring(0, 3)}
              </div>
            </div>
            <div>
              <img
                className="border border-gray rounded-full border-dashed p-1"
                src="./img/planner.svg"
              ></img>
            </div>
            <div>
              <div className="text-gray text-xl flex">
                Leave
                <img
                  className="-rotate-180 ml-4"
                  src="./img/airplane.svg"
                ></img>
              </div>
              <div className="text-black text-2xl font-semibold">
                {endDate.toLocaleDateString("en-us", options).substring(8, 11)}{" "}
                {endDate.toLocaleDateString("en-us", options).substring(4, 8)},
                {endDate.toLocaleDateString("en-us", options).substring(0, 3)}
              </div>
            </div>
          </div>
          <div className="w-full py-5 md:w-36 md:h-36 rounded-[65px] bg-blue/80  flex items-center place-content-center">
            <svg
              width="44"
              height="45"
              viewBox="0 0 54 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="24"
                cy="24"
                r="21.5"
                stroke="white"
                stroke-width="5"
              />
              <line
                x1="37.7678"
                y1="39.2322"
                x2="51.7678"
                y2="53.2322"
                stroke="white"
                stroke-width="5"
              />
            </svg>
          </div>
        </div>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto bg-blue/10 grid place-items-center h-screen"
      >
        <div className="flex items-center justify-center  bg-white border border-gray/50">
          <Dialog.Description>
            <div className="search ">
              <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                direction="horizontal"
              />
            </div>
            <div className="mt-2 mx-auto flex items-center w-full place-content-center">
              <button
                className="w-1/4 rounded-[65px] bg-blue  flex items-center  place-content-center text-xl font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                OK
              </button>
            </div>
          </Dialog.Description>
        </div>
      </Dialog>
    </>
  );
}

import React from "react";

export default function Footer() {
  return (
    <>
      <div className="my-12 flex flex-col gap-y-4 md:flex-row justify-between text-center">
        <div className="text-gray text-xl">
          © 2022 Treloo LLC - All right reserved.
        </div>
        <div className="flex gap-8 text-black/50 text-2xl font-semibold justify-center">
          <a href="">Review</a>
          <a href="">Tips</a>
          <a href="">Alerts</a>
          <a href="">Blog</a>
        </div>
      </div>
    </>
  );
}

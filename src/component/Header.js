import React from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(./img/back.png)" }}
    >
      <div className="container mx-auto  px-6 ">
        <header className="flex justify-between py-8  md:flex-row">
          <div className="text-5xl font-medium">
            <a href="#">Treloo</a>
          </div>
          <section className="MOBILE-MENU flex  md:hidden md:w-0 w-full place-content-end">
            <div
              className={`HAMBURGER-ICON space-y-2 ${
                isNavOpen ? "invisible" : "visible"
              }`}
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-4 uppercase">
                  <a href="#">Review</a>
                </li>
                <li className="border-b border-gray-400 my-4 uppercase">
                  <a href="#">Tips</a>
                </li>
                <li className="border-b border-gray-400 my-4 uppercase">
                  <a href="#">Alerts</a>
                </li>
                <li className="border-b border-gray-400 my-4 uppercase">
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </section>

          <div className="flex flex-row justify-end space-x-16 w-0 invisible md:visible md:w-full">
            <nav className="flex flex-row  space-x-24 text-2xl items-center place-content-center">
              <a href="#">Review</a>
              <a href="#">Tips</a>
              <a href="#">Alerts</a>
              <a href="#">Blog</a>
            </nav>

            <div className="text-2xl bg-white rounded-lg px-6 py-2">
              <button className="px-6 py-2 text-blue font-semibold text-2xl bg-white rounded-lg">
                Blog
              </button>
            </div>
          </div>
        </header>
        <div className="mx-auto flex flex-col mt-6 md:w-3/4 text-center">
          <h1 className="md:text-6xl text-3xl font-semibold opacity-90 leading-tight tracking-wide mt-40">
            Discover Your Life, Travel Where You Want
          </h1>
          <p className="md:text-3xl text-xl leading-normal tracking-wide md:my-16 my-8 opacity-90 mb-36 md:mb-60">
            Would you explore natur paradise in the world, let’s find the best
            destination in world with us.
          </p>
        </div>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 60vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: left;
      }
    `}</style>
    </div>
  );
}

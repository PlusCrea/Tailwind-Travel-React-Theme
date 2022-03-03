import React from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import Offer from "./component/Offer";
import Travel from "./component/Travel";
import Destination from "./component/Destination";
import Testimonials from "./component/Testimonials";
import RegisterBanner from "./component/RegisterBanner";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-14">
        <Search />
        <Offer />
        <Travel />
        <Destination />
        <Testimonials />
        <RegisterBanner />
        <Footer />
      </main>
    </>
  );
}

export default App;

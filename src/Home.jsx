import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import Header from "./Header";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Cards */}
      <Cards />
    </div>
  );
}

export default Home;

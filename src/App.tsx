import React from "react";
import Header from "./components/Header/Header";
import Location from "./components/Location/Location";
import Weather from "./components/Weather/Weather";
import "./tailwind.output.css";

function App() {
  return (
    <div className="text-center lg:mx-64">
      <Header />
      <Location />
      <div className="pt-5">
        <Weather />
      </div>
    </div>
  );
}

export default App;

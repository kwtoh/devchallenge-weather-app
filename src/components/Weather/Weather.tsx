import React from "react";
import WeatherCard from "./WeatherCard/WeatherCard";
import EmptyWeatherCard from "./EmptyWeatherCard/EmptyWeatherCard";

export default function Weather() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="w-auto h-500px">
        <WeatherCard />
      </div>
      <div className="w-auto h-500px">
        <WeatherCard />
      </div>
      <div className="w-auto h-500px">
        <EmptyWeatherCard />
      </div>
    </div>
  );
}

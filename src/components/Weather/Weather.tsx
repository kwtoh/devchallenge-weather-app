import React from "react";
import WeatherCard from "./WeatherCard/WeatherCard";

const weather = {
  country: "Singapore",
  weather_state_name: "Clear",
  latitude: 123,
  longtitude: -123,
  date: "17/10/2020",
  min_temp: 12,
  max_temp: -1,
  air_pressure: 1123,
  humidity: 23,
  wind_direction: 102,
  wind_speed: 1,
  the_temp: 23,
};

export default function Weather() {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="w-auto h-500px">
        <WeatherCard {...weather} />
      </div>
      <div className="w-auto h-500px">
        <WeatherCard {...weather} />
      </div>
      <div className="w-auto h-500px">
        <WeatherCard {...weather} />
      </div>
      <div className="w-auto h-500px">
        <WeatherCard {...weather} />
      </div>
      <div className="w-auto h-500px">
        <WeatherCard {...weather} />
      </div>
      <div className="w-auto h-500px">
        <WeatherCard {...weather} />
      </div>
      <div className="w-auto h-500px">
        <WeatherCard {...weather} />
      </div>
    </div>
  );
}

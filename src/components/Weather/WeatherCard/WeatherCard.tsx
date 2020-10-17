import React from "react";
import moment from "moment";
import "./WeatherCard.css";

interface IWeatherCardProps {
  country: string;
  latitude: number;
  longtitude: number;
  date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  air_pressure: number;
  humidity: number;
  wind_direction: number;
  wind_speed: number;
  weather_state_name: string;
}

export default function WeatherCard({
  country,
  the_temp,
  weather_state_name,
  humidity,
  wind_speed,
  air_pressure,
}: IWeatherCardProps) {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg p-5"
      style={{ textAlign: "left" }}
    >
      <div className="font-sans text-base mb-2 text-gray-700">
        <h1 className="text-2xl">{country}</h1>
        <h1>{moment().format("dddd hh:mma")}</h1>
        <h1>{weather_state_name}</h1>
      </div>
      <div className="flex items-start h-24">
        <img
          className="flex-1 text-gray-700 pt-3"
          style={{ height: "60px", maxWidth: "60px" }}
          src="https://www.metaweather.com/static/img/weather/sn.svg"
          alt="Weather Logo"
        />
        <span className="flex-1 py-2">
          <span className="text-5xl font-bold">{the_temp}</span>
          <span> °C</span>
        </span>
        <span>
          <div>Humidity: {humidity}%</div>
          <div>Wind: {wind_speed} mph</div>
          <div>Pressure: {air_pressure}</div>
        </span>
      </div>
    </div>
  );
}

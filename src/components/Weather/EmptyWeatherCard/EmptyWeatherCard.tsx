import React from "react";

export default function EmptyWeatherCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://cdn.icon-icons.com/icons2/491/PNG/512/add-circle-1_48180.png"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Add New Weather</div>
      </div>
    </div>
  );
}

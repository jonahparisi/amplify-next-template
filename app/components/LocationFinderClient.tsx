"use client";

import { useEffect, useState } from "react";

export default function LocationFinderServer() {
  const [locationInfo, setLocationInfo] = useState({
    City: "N/A",
    Latitude: "N/A",
    Longitude: "N/A",
  });
  const [weatherInfo, setWeatherInfo] = useState({ temp2m: "N/A" });

  const getLocationInfo = async () => {
    const response = await fetch("https://apip.cc/json");
    const locationData = await response.json();
    console.log(locationData);
    setLocationInfo(locationData);
  };

  const getWeatherInfo = async () => {
    const response = await fetch(
      "https://www.7timer.info/bin/astro.php?lon=" +
        locationInfo.Longitude +
        "&lat=" +
        locationInfo.Latitude +
        "&ac=0&unit=metric&output=json&tzshift=0"
    );
    const weatherData = await response.json();
    setWeatherInfo(weatherData.dataseries[0]);
  };

  useEffect(() => {
    getLocationInfo();
  }, []);

  useEffect(() => {
    if (locationInfo.Latitude !== "N/A" && locationInfo.Longitude !== "N/A") {
      getWeatherInfo();
    }
  }, [locationInfo]);
  return (
    <>
      <small>client component</small>
      <h1>Hello from {locationInfo.City} - Client</h1>
      <h3>Its currently {weatherInfo.temp2m} degrees celcius</h3>
    </>
  );
}

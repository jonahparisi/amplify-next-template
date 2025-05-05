export default async function LocationFinderServer() {
  const response = await fetch("https://apip.cc/json");
  const locationData = await response.json();
  console.log(locationData);
  const locationInfo = locationData;

  const response2 = await fetch(
    "https://www.7timer.info/bin/astro.php?lon=" +
      locationInfo.Longitude +
      "&lat=" +
      locationInfo.Latitude +
      "&ac=0&unit=metric&output=json&tzshift=0"
  );
  const weatherData = await response2.json();
  const weatherInfo = weatherData.dataseries[0];

  return (
    <>
      <small>server component</small>
      <h1>Hello from {locationInfo.City}</h1>
      <h3>Its currently {weatherInfo.temp2m} degrees celcius</h3>
    </>
  );
}

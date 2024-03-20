import { fetchWeather, groupForecastsByDay } from "./lib/FetchWeather";

import Forecast from "./components/Forecast/Forecast";

import styles from "./page.module.css";

export default async function Home() {
  const apiKey = process.env.WEATHER_API_KEY; // Replace with your actual API key
  const city = "Berlin,DE"; // City name and country code
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;

  const forecasts = await fetchWeather(url);

  return (
    <main className={styles.main}>
      <header>
        <h2>{`Weather Forecast for ${city}`}</h2>
      </header>
      {forecasts && <Forecast forecasts={groupForecastsByDay(forecasts)} />}
    </main>
  );
}

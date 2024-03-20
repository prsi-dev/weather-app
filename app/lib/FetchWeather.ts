import { format, parseISO } from "date-fns";

import { WeatherData, WeatherResponse } from "../types/ForecastTypes";

export const groupForecastsByDay = (forecasts: WeatherData[]) => {
  const groupedByDay = forecasts.reduce(
    (acc: { [key: string]: WeatherData[] }, forecast) => {
      const dateKey = format(parseISO(forecast.dt_txt), "yyyy-MM-dd");

      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }

      acc[dateKey].push(forecast);
      console.log(acc);

      return acc;
    },
    {}
  );

  const groupedArray = Object.entries(groupedByDay).map(([date, data]) => ({
    date,
    data,
  }));

  return groupedArray;
};

export async function fetchWeather(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data: WeatherResponse = await response.json();

    return data.list;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

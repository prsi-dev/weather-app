import { format, parseISO } from "date-fns";

import { Forecast, WeatherResponse } from "../types/ForecastTypes";

export const groupForecastsByDay = (
  forecasts: []
): Record<string, Forecast[]> => {
  return (
    forecasts &&
    forecasts.reduce(
      (acc: { [x: string]: any[] }, forecast: { dt_txt: string }) => {
        const dateKey = format(parseISO(forecast.dt_txt), "yyyy-MM-dd");

        if (!acc[dateKey]) {
          acc[dateKey] = [];
        }

        acc[dateKey].push(forecast);

        return acc;
      },
      {} as Record<string, any[]>
    )
  );
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

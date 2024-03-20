"use client";

import { format, parseISO } from "date-fns";

import WeatherIcon from "../WeatherIcon/WeatherIcon";
import DetailDialog from "../DetailModal/DetailModal";

import { DailyForecast } from "@/app/types/ForecastTypes";

import styles from "./styles.module.css";

interface ForecastProps {
  forecasts: DailyForecast[];
}

const Forecast: React.FC<ForecastProps> = ({ forecasts }) => {
  return (
    <div className={styles.forecast}>
      {forecasts.map((forecast) => (
        <div key={forecast.date} className={styles.day}>
          <h3 className={styles.forecastDate}>
            {format(parseISO(forecast.date), "EEEE, MMMM d")}
          </h3>
          <div className={styles.info}>
            {forecast.data.map((detailedForecast) => (
              <DetailDialog
                key={detailedForecast.dt}
                forecast={detailedForecast}
                trigger={
                  <div className={styles.forecastDay}>
                    <WeatherIcon value={detailedForecast.weather[0].icon} />
                    <p>{format(parseISO(detailedForecast.dt_txt), "p")}</p>
                    <p>{Math.floor(detailedForecast.main.temp)}°C</p>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;

"use client";

import { format, parseISO } from "date-fns";

import WeatherIcon from "../WeatherIcon/WeatherIcon";
import DetailDialog from "../DetailModal/DetailModal";

import { Forecast } from "@/app/types/ForecastTypes";

import styles from "./styles.module.css";

interface DailyForecasts {
  [key: string]: Forecast[];
}

interface ForecastProps {
  forecasts: DailyForecasts;
}

const Forecast: React.FC<ForecastProps> = ({ forecasts }) => {
  return (
    <div className={styles.forecast}>
      {Object.entries(forecasts).map(([date, forecasts]) => (
        <div key={date} className={styles.day}>
          <h3 className={styles.forecastDate}>
            {format(parseISO(date), "EEEE, MMMM d")}
          </h3>
          <div className={styles.info}>
            {forecasts &&
              forecasts?.map((forecast, index) => (
                <DetailDialog
                  key={index}
                  forecast={forecast}
                  trigger={
                    <div key={index} className={styles.forecastDay}>
                      <WeatherIcon value={forecast.weather[0].icon} />
                      <p> {format(parseISO(forecast.dt_txt), "p")}</p>
                      <p>{Math.floor(forecast.main.temp)}°C</p>
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

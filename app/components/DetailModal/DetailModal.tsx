import { format, parseISO } from "date-fns";

import { IoClose } from "react-icons/io5";
import * as Dialog from "@radix-ui/react-dialog";
import WindDirection from "../WindDirection/WindDriection";

import WeatherIcon from "../WeatherIcon/WeatherIcon";

import Forecast from "../Forecast/Forecast";

import styles from "./styles.module.css";

interface DialogProps {
  trigger: JSX.Element;
  forecast: Forecast;
}

const DetailDialog = ({ trigger, forecast }: DialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={styles.DialogTitle}>
            <span className={styles.date}>
              <h3>{format(parseISO(forecast.dt_txt), "EEEE, MMMM d")}</h3>
              <h3>{format(parseISO(forecast.dt_txt), "p")}</h3>
            </span>
          </Dialog.Title>
          <Dialog.Description className={styles.DialogDescription}>
            <div className={styles.mainDescription}>
              <WeatherIcon value={forecast.weather[0].icon} />
              <p className={styles.mainDescriptionTitle}>
                {forecast.weather[0].description}
              </p>
            </div>
            <div className={styles.tempDescription}>
              <h4>Temperature Conditions</h4>
              <p>Temperature: {Math.floor(forecast.main.temp)}°C</p>
              <p>Feels like: {Math.floor(forecast.main.feels_like)}°C</p>
              <p>Humidity: {forecast.main.humidity}%</p>
              <p>Atmospheric Pressure: {forecast.main.pressure} hPa</p>
            </div>
            <div className={styles.windDescription}>
              <h4>Wind Conditions</h4>
              <p>Speed: {forecast.wind.speed} m/s</p>
              <p>Gust: {forecast.wind.gust} m/s</p>
              <WindDirection degrees={forecast.wind.deg} />
            </div>
          </Dialog.Description>
          <Dialog.Close asChild>
            <button className={styles.IconButton} aria-label="Close">
              <IoClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DetailDialog;

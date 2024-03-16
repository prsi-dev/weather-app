import { IoSunny, IoSnow } from "react-icons/io5";

import {
  WiFog,
  WiRain,
  WiCloudy,
  WiRainWind,
  WiDayCloudy,
  WiNightCloudy,
  WiStormShowers,
  WiNightAltCloudy,
  WiDaySunnyOvercast,
} from "react-icons/wi";

const WeatherIcon = ({ value }: { value: string }) => {
  switch (value) {
    case "01d":
      return <IoSunny data-testid="01d" />;
    case "01n":
      /* add data-testid="01n" to all icons to handle bigger tests  */
      return <IoSunny />;
    case "02d":
      return <WiDaySunnyOvercast />;
    case "02n":
      return <WiNightAltCloudy />;
    case "03d":
      return <WiCloudy />;
    case "03n":
      return <WiCloudy />;
    case "04d":
      return <WiDayCloudy />;
    case "04n":
      return <WiNightCloudy />;
    case "09d":
      return <WiRainWind />;
    case "09n":
      return <WiRainWind />;
    case "10d":
      return <WiRain />;
    case "10n":
      return <WiRain />;
    case "11d":
      return <WiStormShowers />;
    case "11n":
      return <WiStormShowers />;
    case "13d":
      return <IoSnow />;
    case "13n":
      return <IoSnow />;
    case "50d":
      return <WiFog />;
    case "50n":
      return <WiFog />;

    default:
      return <IoSunny />;
  }
};

export default WeatherIcon;

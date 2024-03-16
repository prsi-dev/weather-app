export type WeatherProps = {
  data: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
  };
};

export interface Forecast {
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
  dt_txt: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
    feels_like: number;
  };
  weather: [
    {
      icon: string;
      main: string;
      description: string;
    }
  ];
}

export interface WeatherResponse {
  dt: number;
  list: {
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: {
      description: string;
    }[];
  }[];
}

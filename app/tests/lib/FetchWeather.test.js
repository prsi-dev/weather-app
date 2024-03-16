import { fetchWeather } from "../../lib/FetchWeather";

beforeAll(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

test("fetchWeather successfully fetches data", async () => {
  // Mock fetch to simulate a successful response
  fetch.mockResolvedValueOnce({
    ok: true,
    json: () =>
      Promise.resolve({
        dt: 1710547200,
        list: {
          dt_txt: "2024-03-16 00:00:00",
          main: {
            temp: 13,
          },
          weather: {
            description: "clear",
          },
        },
      }),
  });

  const apiKey = process.env.WEATHER_API_KEY;
  const city = "Berlin,DE";
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  const result = await fetchWeather(url);

  // Verify that fetch was called with the correct URL
  expect(fetch).toHaveBeenCalledWith(url);
  console.log(result);

  // Verify the structure of the data returned by your function
  expect(result).toEqual({
    dt_txt: expect.any(String),
    main: expect.objectContaining({
      temp: expect.any(Number),
    }),
    weather: expect.objectContaining({
      description: expect.any(String),
    }),
  });
});

test("fetchWeather handles fetch failure", async () => {
  // Mock fetch to simulate a failed response
  fetch.mockResolvedValueOnce({
    ok: false,
  });

  const url = "https://api.example.com/weather";

  // Expect the function to throw due to fetch failure
  await expect(fetchWeather(url)).rejects.toThrow(
    "Failed to fetch weather data"
  );
});

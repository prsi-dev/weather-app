This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

To run the tests:

```bash
npm run test
or
npm run test --watchAll
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## References

- OpenWeatherMap API for a 5-day weather forecast: [https://openweathermap.org/forecast5](https://openweathermap.org/forecast5)

## Walktrough

- App is using Next 14 and App folder structure, Typescript and CSS modules.
- Light mode and dark mode suported.
- Gets the 5 day forecast for Berlin, DE from OpenWeatherMap.
- Displays forecast grouped by days , Icons are from react-icons [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)
- Detail view modal built on Radix-ui dialog [https://www.radix-ui.com/primitives/docs/components/dialog](https://www.radix-ui.com/primitives/docs/components/dialog)
- Tests running on Jest and React-Testing library.

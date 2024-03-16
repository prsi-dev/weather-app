import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { forecasts } from "../mocks/ForecastMocks";
import Forecast from "@/app/components/Forecast/Forecast";

describe("WeatherDays", () => {
  it("renders without crashing and displays forecasts", () => {
    render(<Forecast forecasts={forecasts} />);

    // Check for date formatting and display
    expect(screen.getByText(/Saturday, April 1/i)).toBeInTheDocument();

    // Check for temperature display
    expect(screen.getByText("12°C")).toBeInTheDocument();

    // Check for the right icon
    expect(screen.getByTestId("01d")).toBeInTheDocument();
  });

  // Add more tests for different scenarios and interactions
});

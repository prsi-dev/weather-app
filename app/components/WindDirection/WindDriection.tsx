import React from "react";

// Function to determine wind direction
const getWindDirection = (degrees: number) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index =
    Math.round(((degrees %= 360) < 0 ? degrees + 360 : degrees) / 45) % 8;
  return directions[index];
};

interface WindDirectionProps {
  degrees: number;
}

const WindDirection = ({ degrees }: WindDirectionProps) => (
  <div>{`Wind Direction: ${degrees}° ${getWindDirection(degrees)}`}</div>
);

export default WindDirection;

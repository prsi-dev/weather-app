import React from "react";

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
  <span>{`Wind Direction: ${degrees}° ${getWindDirection(degrees)}`}</span>
);

export default WindDirection;

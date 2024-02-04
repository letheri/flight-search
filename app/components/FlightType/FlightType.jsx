import BookingType from "./FlightTypeCard";
import { FlightIcon } from "../icons/FlightIcon";
import { RocketIcon } from "../icons/RocketIcon";
import { useState } from "react";

const FLIGHTTYPES = {
  PLANE: "plane-flight",
  SPACE: "space-flight",
};

function FlightType() {
  const [flightType, setFlightType] = useState(FLIGHTTYPES.PLANE);

  const handleSetType = (type) => {
    setFlightType(type);
  };

  return (
    <div className="columns-2 sm:columns-4 px-4 pt-2">
      <BookingType
        name="Plane"
        selected={flightType === FLIGHTTYPES.PLANE}
        onTypeSet={() => handleSetType(FLIGHTTYPES.PLANE)}
      >
        <FlightIcon width="30px" height="30px" />
      </BookingType>
      <BookingType
        name="Space"
        selected={flightType === FLIGHTTYPES.SPACE}
        onTypeSet={() => handleSetType(FLIGHTTYPES.SPACE)}
      >
        <RocketIcon width="30px" height="30px" />
      </BookingType>
    </div>
  );
}

export default FlightType;
